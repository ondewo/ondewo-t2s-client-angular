/**
 * Jest configuration for the hand-written Keycloak bearer-auth surface (Angular 20, ESM).
 * Uses jest-preset-angular so Angular/rxjs/@ngx-grpc ESM is transformed correctly; coverage is
 * gated on the hand-written sources only, i.e. src/auth and src/examples (every generated
 * protobuf/gRPC-web stub is excluded).
 */

/**
 * Filename regexes that identify a file as an emitted *generated stub* rather than hand-written code:
 * `.pb.ts` / `.pbsc.ts` / `.pbconf.ts` are produced by the @ngx-grpc generator, while `_pb.js`,
 * `_pb.ts`, `_pb.d.ts`, `*ServiceClientPb.ts` and `_grpc_web_pb.*` come from protoc plus
 * protoc-gen-grpc-web. Every one of them is rewritten wholesale by the codegen on each ondewo-t2s-api
 * bump, is never edited by hand, and contains no logic of our own worth asserting on.
 *
 * They are spread into `coveragePathIgnorePatterns` below so the 100% `coverageThreshold` stays a
 * meaningful gate on the hand-written surface: without the exclusion the thousands of untested
 * generated lines would make the global threshold unreachable and force it to be lowered.
 * @type {string[]}
 */
const GENERATED_STUB_PATTERNS = [
	'\\.pb\\.ts$',
	'\\.pbsc\\.ts$',
	'\\.pbconf\\.ts$',
	'_pb\\.js$',
	'_pb\\.ts$',
	'_pb\\.d\\.ts$',
	'.*ServiceClientPb\\.ts$',
	'_grpc_web_pb\\.(js|ts|d\\.ts)$'
];

/** @type {import('jest').Config} */
module.exports = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
	roots: ['<rootDir>/src/auth', '<rootDir>/src/examples', '<rootDir>/tests'],
	testMatch: ['**/*.spec.ts'],
	moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage',
	coverageReporters: ['text', 'text-summary', 'lcov'],
	collectCoverageFrom: ['src/auth/**/*.ts', 'src/examples/**/*.ts', '!**/*.spec.ts'],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/src/ondewo-t2s-api/',
		'/api/',
		'\\.spec\\.ts$',
		...GENERATED_STUB_PATTERNS
	],
	coverageThreshold: { global: { branches: 100, functions: 100, lines: 100, statements: 100 } }
};
