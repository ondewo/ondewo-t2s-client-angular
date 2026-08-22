/**
 * Guards the layout property that made a sibling client unbuildable: the hand-written auth
 * sources must not live inside the directory ng-packagr wipes.
 *
 * The angular proto-compiler drops its own `ng-package.json` into the library source root
 * (`src/`) unless the repository ships one, and ng-packagr 20.x removes `dest` recursively
 * *before* tsc compiles the entry point. Anything hand-written under that directory is gone
 * by the time the generated barrel is compiled, and since proto-compiler 5.13.0 that barrel
 * star-exports the hand-written `auth/index.ts` — so the build dies with
 * `TS2307: Cannot find module './lib/auth'`.
 *
 * `dest` is read from the compiler's own configuration rather than hard-coded, so a compiler
 * that renames it moves this guard with it.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';

/** Repository root; this spec lives one directory below it. */
const REPO_ROOT: string = resolve(__dirname, '..');

/** The directory mounted as the proto-compiler's input volume, i.e. the library source root. */
const LIBRARY_SOURCE_ROOT: string = join(REPO_ROOT, 'src');

/** An `ng-package.json` shipped by this repository takes precedence over the compiler's default. */
const REPOSITORY_NG_PACKAGE: string = join(LIBRARY_SOURCE_ROOT, 'ng-package.json');

/** The compiler's default `ng-package.json`, copied into the source root when none is shipped. */
const COMPILER_NG_PACKAGE: string = join(
	REPO_ROOT,
	'ondewo-proto-compiler',
	'angular',
	'image-data',
	'default-lib-files',
	'ng-package.json'
);

/** Barrel locations `generate-public-api.sh` star-exports, relative to the library source root. */
const BARREL_CANDIDATES: string[] = ['auth/index.ts', 'lib/auth/index.ts'];

/** The subset of the ng-packagr configuration this guard reads. */
interface NgPackageConfig {
	/** Output directory ng-packagr wipes before compiling, relative to the configuration file. */
	dest?: string;
}

/**
 * Resolve the directory ng-packagr deletes, from the configuration the build actually uses.
 *
 * @returns the absolute path `dest` resolves to inside the library source root.
 */
function resolveNgPackagrDest(): string {
	let configPath: string = COMPILER_NG_PACKAGE;
	if (existsSync(REPOSITORY_NG_PACKAGE)) {
		configPath = REPOSITORY_NG_PACKAGE;
	}
	if (!existsSync(configPath)) {
		throw new Error(
			`Cannot read ${configPath}: the ondewo-proto-compiler submodule is not checked out, so ` +
				"ng-packagr's output directory is unknown. Run `git submodule update --init ondewo-proto-compiler`."
		);
	}
	const config: NgPackageConfig = JSON.parse(readFileSync(configPath, 'utf8')) as NgPackageConfig;
	if (config.dest === undefined || config.dest === '') {
		throw new Error(`No "dest" in ${configPath}: the directory ng-packagr deletes is unknown.`);
	}
	return resolve(LIBRARY_SOURCE_ROOT, config.dest);
}

/**
 * Collect every TypeScript file below a directory.
 *
 * @param directory absolute path to walk; a non-existent path contributes nothing.
 * @returns absolute paths of the `.ts` files found, in traversal order.
 */
function collectTypeScriptSources(directory: string): string[] {
	if (!existsSync(directory)) {
		return [];
	}
	const found: string[] = [];
	for (const entry of readdirSync(directory)) {
		const candidate: string = join(directory, entry);
		if (statSync(candidate).isDirectory()) {
			found.push(...collectTypeScriptSources(candidate));
		} else if (candidate.endsWith('.ts')) {
			found.push(candidate);
		}
	}
	return found;
}

/**
 * Report whether a path lies inside a directory.
 *
 * @param directory absolute path of the containing directory.
 * @param candidate absolute path to test.
 * @returns `true` when `candidate` is `directory` itself or below it.
 */
function isInside(directory: string, candidate: string): boolean {
	const step: string = relative(directory, candidate);
	return step === '' || (!step.startsWith('..') && !step.startsWith(sep));
}

describe('hand-written barrel location', (): void => {
	/** Absolute path ng-packagr wipes before it compiles the generated entry point. */
	const ngPackagrDest: string = resolveNgPackagrDest();

	/**
	 * The compiler star-exports the first of `auth/index.ts` and `lib/auth/index.ts` it finds,
	 * so exactly one must exist: none means the generated barrel exports nothing hand-written,
	 * two means the same symbols are exported twice.
	 */
	it('ships exactly one barrel in a location the compiler recognises', (): void => {
		const present: string[] = BARREL_CANDIDATES.filter((candidate: string): boolean =>
			existsSync(join(LIBRARY_SOURCE_ROOT, candidate))
		);
		expect(present).toEqual(['auth/index.ts']);
	});

	/**
	 * The failing case this guard exists for: a barrel under `dest` is deleted before tsc runs,
	 * and the generated barrel then exports a directory that no longer exists.
	 */
	it('keeps that barrel outside the directory ng-packagr deletes', (): void => {
		for (const candidate of BARREL_CANDIDATES) {
			const barrel: string = join(LIBRARY_SOURCE_ROOT, candidate);
			if (existsSync(barrel)) {
				expect(isInside(ngPackagrDest, barrel)).toBe(false);
			}
		}
	});

	/**
	 * The barrel is only the entry point; a module it re-exports is deleted just as silently,
	 * so nothing hand-written may live under `dest` at any depth.
	 */
	it('keeps every hand-written source outside that directory', (): void => {
		expect(collectTypeScriptSources(ngPackagrDest)).toEqual([]);
	});
});
