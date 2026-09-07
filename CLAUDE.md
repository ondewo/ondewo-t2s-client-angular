# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Working Principles

Behavioral guidelines to reduce common mistakes. They bias toward caution over speed; for trivial tasks, use judgment.

### Think before coding

Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### Simplicity first

Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### Surgical changes

Touch only what you must. Clean up only your own mess.

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that _your_ changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: every changed line should trace directly to the user's request.

### Goal-driven execution

Define success criteria. Loop until verified.

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```text
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

These guidelines are working if: fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and
clarifying questions come before implementation rather than after mistakes.

## Git Commits

- **Never include Claude as author or co-author** in commit messages, PR descriptions, or any other text. Do not add
  `Co-Authored-By: Claude…` trailers, "Generated with Claude Code" footers, or any similar attribution.
- The user's own git author identity (already configured in git) is the only identity that should appear on commits.
- This rule overrides the default Claude Code commit-template guidance.
- **Never prepend the JIRA ticket ID** (e.g. `[OND211-2386]`) to the commit subject yourself. The `giticket` pre-commit
  hook reads the ticket from the branch name (`(feature|bugfix|support|hotfix)/<TICKET>-…`) and prepends `[<ticket>]`
  (with a trailing space) automatically. Writing the prefix manually produces a duplicate like
  `[OND211-2386] [OND211-2386] feat: …`. Write the subject as plain Conventional Commits (`feat: …`, `fix(scope): …`,
  `docs(types): …`) and let the hook add the prefix on commit.

## General Principles

- Follow existing patterns before introducing new abstractions.
- Keep changes minimal and consistent with surrounding code.
- Validate inputs early with descriptive, context-rich error messages.
- Use context managers for files, sockets, and thread pools.
- Prefer region comments for grouping methods in files that already use them.
- End edited Markdown and YAML files with a trailing newline.

## Repository layout — what is generated and what is not

- **Hand-written surface = `src/auth/` + `src/examples/` + `tests/` only.** `src/auth/` is the Keycloak
  bearer-token provider (`keycloak-token-provider.ts`), the token seam (`token-provider.ts`,
  `resolve-token.ts`), the gRPC-web and HTTP interceptors, the DI helper (`auth.providers.ts`) and the
  barrel (`index.ts`). `src/examples/t2s-synthesis.example.ts` is the usage example. `tests/` holds
  repository-level guards that belong to no single source file. Everything the coverage gate measures
  lives in the first two directories.
- **`src/auth/`, not `src/lib/auth/` — this is load-bearing.** The compiler's `ng-package.json` sets
  ng-packagr's `dest` to `lib`, and ng-packagr 20.x deletes that directory recursively _before_ tsc
  compiles the entry point, so hand-written code under `src/lib` is gone by the time the generated
  barrel that star-exports it is compiled (`TS2307: Cannot find module './lib/auth'`).
  `tests/hand-written-barrel-location.spec.ts` reads `dest` out of the compiler's own
  `ng-package.json` and fails if anything hand-written is placed under it again.
- **Generated, never hand-edit or test**: `api/` (`*.pb.ts` / `*.pbsc.ts` / `*.pbconf.ts`), `fesm2022/`,
  `public-api.ts`, `index.d.ts`, `ondewo-t2s-client-angular.d.ts{,.map}`, `*.metadata.json`. They are
  rewritten wholesale by `make build` and are excluded from prettier, eslint, pre-commit and coverage.
- **Two `package.json` files.** `src/package.json` is the _published_ manifest — its `version` (6.6.2)
  tracks the release. The root `package.json` is the _development_ manifest (jest / eslint / prettier
  devDependencies); its `version` field (6.2.0) is a stale build artefact, not the release version.
  `ONDEWO_T2S_VERSION` in the `Makefile` is the single source of truth for a release.
- **Two submodules**: `src/ondewo-t2s-api` (protos, pinned by `T2S_API_GIT_BRANCH`) and
  `ondewo-proto-compiler` (codegen image source, pinned by `ONDEWO_PROTO_COMPILER_GIT_BRANCH`).
- **The committed `public-api.ts` does not export `src/auth`** (`grep -c auth public-api.ts` → 0), even
  though `RELEASE.md` 6.6.1/6.6.2 announce that export. `ondewo-proto-compiler` 5.13.0 added the
  generator support that emits it, but the barrel is written at codegen time: only a real `make build`
  can add it — a pin bump cannot. Until then the auth surface is reachable in-repo and by deep import.

## Tests and the coverage gate

```shell
npm test                 # jest --config jest.config.js
npm run test:coverage    # same + explicit --coverage
npx jest --config jest.config.js --coverage --ci   # exactly what CI runs
```

- `jest.config.js` sets `collectCoverage: true` **and** `coverageThreshold: { global: { branches: 100,
  functions: 100, lines: 100, statements: 100 } }`, so the gate is enforced even by a bare `npm test`.
- Current state: **9 suites / 77 tests, 100% on all four metrics** (198/198 statements, 78/78 branches,
  52/52 functions, 187/187 lines).
- `roots` is `['<rootDir>/src/auth', '<rootDir>/src/examples', '<rootDir>/tests']` — `tests/` is run but
  not measured, because it asserts on the repository layout rather than on a module.
- `collectCoverageFrom` is `['src/auth/**/*.ts', 'src/examples/**/*.ts', '!**/*.spec.ts']`, so an
  untested **new** file under either measured directory is counted and fails the build. Verified:
  dropping one 4-statement untested file into each took the run to 95.19% statements and `jest` exited
  1. Do not narrow `collectCoverageFrom` back to the auth tree — that is what let `src/examples/` run
  under test while being unmeasured.
- `coveragePathIgnorePatterns` excludes `node_modules`, `src/ondewo-t2s-api/`, `api/`, `*.spec.ts` and the
  `GENERATED_STUB_PATTERNS` list. Those are the **only** exclusions; there is no `istanbul ignore` comment
  anywhere in the hand-written sources, and none should be added — write the test instead.
- `.husky/pre-push` runs `npm test`, so the same gate blocks a push locally. It is deliberately **not** in
  `.husky/pre-commit`: `make run_precommit_hooks` executes `.husky/pre-commit` directly and `make release`
  calls it, which would run the coverage gate in the middle of an automated release.

## CI — `.github/workflows/tests.yml` is the only workflow

Job `auth-unit-tests` on `ubuntu-latest`, triggered on **push to any branch** (`branches: ['**']`) and on
**every pull request**. Steps, in order:

1. `actions/checkout@v5` with `submodules: false`
2. `run:` — read `ONDEWO_PROTO_COMPILER_GIT_BRANCH` out of the `Makefile` into a step output
3. `actions/checkout@v5` — `ondewo/ondewo-proto-compiler` at that ref, into `ondewo-proto-compiler/`
4. `actions/setup-node@v5`, node 20, `cache: 'npm'`
5. `npm install --no-audit --no-fund --legacy-peer-deps`
6. `make eslint`
7. `npx jest --config jest.config.js --coverage --ci`
8. `actions/upload-artifact@v5` → `coverage/`, 14-day retention, `if: always()`

What turns it **red**:

- an eslint **error**. Warnings do not: `make eslint` has no `--max-warnings 0`. One `no-ternary` warning
  is left on purpose in `src/auth/auth-http.interceptor.spec.ts:86`.
- any failing spec, or any of the four coverage metrics below 100% — in practice, a new file under
  `src/auth/` or `src/examples/` without tests.
- **an `ONDEWO_PROTO_COMPILER_GIT_BRANCH` that does not name a real tag.** Steps 2–3 resolve that
  variable and check the compiler out standalone, because `tests/hand-written-barrel-location.spec.ts`
  reads ng-packagr's `dest` from the compiler's own `ng-package.json`. `test -n "$ref"` fails on an
  empty match and `actions/checkout` fails on a ref that does not exist, so the pin is now a CI input,
  not just release metadata. `cache: 'npm'` additionally needs the tracked `package-lock.json`.

What does **not** turn it red: the `src/ondewo-t2s-api` submodule. `submodules: false` means CI never
checks it out; the specs compile against the **committed** `api/` stubs.
`uvx pre-commit run --all-files` is likewise not part of CI — it only runs locally via
`.husky/pre-commit` (staged files) or by hand.

## The `ondewo-proto-compiler` pin, and how to bump it

A bump is **exactly two edits** and never includes codegen:

```shell
git submodule update --init --recursive
git -C ondewo-proto-compiler fetch --tags origin
git -C ondewo-proto-compiler checkout <VERSION>
git add ondewo-proto-compiler
perl -i -pe 's|^ONDEWO_PROTO_COMPILER_GIT_BRANCH=.*|ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/<VERSION>|' Makefile
git submodule status   # must show the tag's peeled commit + "(<VERSION>)"
```

- Currently pinned to **5.14.0** (`b71f8ed4575ecc4ee8084389a075514acac61ff4`), `Makefile:19`
  `ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/5.14.0`. Keep the gitlink and the Makefile variable in lockstep:
  `make check_out_correct_submodule_versions` does `git checkout ${ONDEWO_PROTO_COMPILER_GIT_BRANCH}`, so a
  Makefile value older than the gitlink silently **downgrades** the submodule on the next build — and
  `.github/workflows/tests.yml` checks the compiler out at the Makefile value, so a wrong value is now a
  red CI run rather than a silent drift.
- `.gitmodules` uses the **ssh** URL, so the fetch needs an ssh key on the machine.
- Two things the upstream `update_proto_compiler_dependency.sh` also touches are **no-ops here**, verified:
  `Dockerfile.utils:23` is already `ENV NODE_VERSION=24.14.0` (what 5.14.0's Makefile declares), and the
  jq dependency sync into `src/package.json` changes nothing, because `5.11.0..5.14.0` only bumps the
  `version` field of `angular/image-data/package.json` and the merge never reads `.version`.
- **A pin bump ships none of the 5.12/5.13/5.14 fixes.** Those are emitted at codegen time; the committed
  stubs are untouched. The one that matters here is 5.14.0's proto3-explicit-presence fix: an
  `optional` scalar currently cannot transmit its zero value from the generated Angular stubs.
  `src/ondewo-t2s-api/ondewo/t2s/text-to-speech.proto` declares 6 `optional` fields, exactly one of them
  scalar (`optional string instruction = 13`), so the blast radius here is small — but do not write
  "Regenerated with ondewo-proto-compiler X" into `RELEASE.md` unless `make build` actually ran.

## pre-commit — hook order and the two traps

`uvx pre-commit run --all-files` must exit 0 (`pre-commit` is not on PATH; use `uvx`). Hooks:
markdownlint-cli2 `v0.23.2`, pre-commit-hooks `v6.0.0`, conventional-pre-commit `v4.4.0`, giticket `'1.92'`
— all four are the newest stable tags. Keep giticket's rev **quoted**; unquoted `1.92` is a YAML float.

- **ORDER MATTERS: `conventional-pre-commit` must be declared BEFORE `giticket`.** Both run at the
  `commit-msg` stage and pre-commit executes repos in declaration order. giticket rewrites the subject to
  `[OND221-2830] feat: …`, which is no longer valid Conventional Commits, so with giticket first every
  commit on a ticket branch fails and can only be made with `--no-verify`. Validate first, decorate
  second. Already the case since `e7401d7`; do not "fix" it again by reordering.
- **`markdownlint-cli2` needs `require_serial: true`, and it is load-bearing.** `.markdownlint-cli2.yaml`
  declares `globs: ['*.md']`, so _every_ invocation additionally lints all root markdown on top of the
  filenames pre-commit passes it. Without `require_serial`, pre-commit splits the file list across parallel
  processes (this machine: 128), two of them fix-and-write `README.md` / `RELEASE.md` simultaneously, and
  the interleaved writes **silently corrupt** the files. Observed, and reproduced deterministically by
  running two `markdownlint-cli2` processes concurrently in a scratch copy: `ONDEWO` → `ONDEW`,
  `Version` → `Vesion`, `## Release …` demoted to `# Release …`, `*****************` shortened by one
  asterisk, and a whole `* Tracking API Version …` bullet dropped. The same corruption happens under
  v0.23.0 and v0.23.2 — it is the config's glob plus parallelism, not a markdownlint version bug.
  A single serial invocation fixes the same files cleanly.
- **markdownlint MD053 stays disabled** in `.markdownlint-cli2.yaml`. Its auto-fix DELETES the
  `[comment]: <> (START/END OF GITHUB README)` reference-definition markers that `make build` slices the
  published README with. Never re-enable it.
- After any markdownlint auto-fix of `RELEASE.md`, re-check that the `## Release … <VERSION>` headings and
  the `*****************` separators survived: `grep -c '^## Release' RELEASE.md src/RELEASE.md` (must be
  equal) and `make TEST` (the `Release Notes:` block must be non-empty).

## prettier / husky — the deadlock and the ignore list

`.husky/pre-commit` runs `make eslint`, then `make prettier PRETTIER_WRITE=-w`, then `pre-commit run`.
`prettier -w` rewriting `.pre-commit-config.yaml` (it wants to reflow giticket's `args:` array) leaves the
config unstaged, and the chained `pre-commit run` then aborts with _"Your pre-commit configuration is
unstaged"_. `.prettierignore` therefore **must** keep listing `.pre-commit-config.yaml`,
`.markdownlint-cli2.yaml`, `CLAUDE.md`, `README.md`, `RELEASE.md`, `index.d.ts` and `coverage/`.
`README.md`/`RELEASE.md` are there for a second reason: prettier rewrites
`[comment]: <> (START OF GITHUB README)` into `[comment]: <> 'START OF GITHUB README'`, which breaks the
release README slice. Verify with
`node_modules/.bin/prettier --config .prettierrc --check --ignore-path .prettierignore ./` → 0 warnings.

`.husky/pre-commit` also skips `pre-commit run` when `.pre-commit-config.yaml` is unstaged — the release's
`make run_precommit_hooks` invokes the hook directly and the codegen leaves the config dirty.

## Root `README.md` / `RELEASE.md` are copies of `src/`

`src/README.md` and `src/RELEASE.md` are the sources; the root copies are what `make release` commits and
what `gh release create -n "$(CURRENT_RELEASE_NOTES)"` reads. `src/package.json` now carries
`"postbuild": "cp README.md ../. && cp RELEASE.md ../."` and `"build": "npm run generate && npm run
postbuild"`, so `make build` → `npm_run_build` keeps them in sync. Nothing copied them before that, and
they had drifted **in both directions**: the root copy was missing 6.6.0/6.5.0/6.2.0/6.1.1/6.1.0/6.0.0,
and `src/RELEASE.md` was missing 5.1.0. Both files are byte-identical now (`diff RELEASE.md
src/RELEASE.md`) and must stay that way.

- **A resync is a merge, never a copy in one direction.** Overwriting the root copy with `src/` is what
  silently deleted the 5.1.0 section; overwriting `src/` with the root copy would delete six 6.x
  sections. Before touching either file, diff the `## Release` headings of both and take the union:
  `comm -3 <(grep '^## Release' RELEASE.md) <(grep '^## Release' src/RELEASE.md)` must print nothing
  afterwards.
- **`RELEASE.md` is the authoritative changelog and a release tag holds the complete history.** If a
  markdownlint `--all-files` pass or a careless "dedup" ever drops a `## Release … X.Y.Z` heading,
  restore both files from the latest release tag rather than retyping the notes.

`CURRENT_RELEASE_NOTES` (`Makefile:30`) terminates the perl range on `/^\*{5}/`; the old terminator
`/\*\*/` matched _any_ line containing two asterisks, so a bolded word truncated the slice. That fix
landed upstream in `949edc4` — do not re-apply it. Check the slice with `make TEST`.

Historical note, so nobody "re-fixes" it: `RELEASE.md` has 22 `## Release` headings against 21 git tags.
6.4.0 / 6.4.1 / 6.4.2 were tagged without changelog entries; 5.1.0, 6.6.1 and 6.6.2 have entries without
a tag. Two edits were made to the history, both deliberate: the `5.1.0` section was **restored** into
`src/RELEASE.md` (it had only ever existed in the root copy, and the first resync dropped it), and one of
two byte-identical `## Release ONDEWO T2S Angular Client 5.0.0` sections was removed because markdownlint
MD024 rejects it. Nothing else was deleted. Do not invent notes for the missing tags.

## Release gotchas

- **Trust the registry, not the log.** `make release_all_clients` wraps each client in `|| echo "Already
  released …"`, so a _failed_ release is reported as "done". After any release, verify the GitHub release
  **and** the published npm package directly.
- **`npm install failed after 5 attempts` in a release log is usually a red herring** — that text is the
  echo _inside_ the docker `RUN for i in 1..5; do npm install …` retry loop, not a real failure. Look
  further down for the real error (a TTY error, an eslint failure).
- **Codegen must run TTY-free.** The `docker run` that invokes the proto-compiler must not pass `-it` —
  non-interactively it fails with `cannot attach stdin to a TTY-enabled container because stdin is not a
  terminal`. Keep `-it` only on the interactive `--entrypoint /bin/bash` debug script.
- **Release Makefiles print secrets.** Any `docker run … -e <TOKEN>=…`, `echo $(TOKEN) | gh auth` or
  `make release $(info)` recipe line without a leading `@` makes `make` echo the expanded token. Rotate
  anything printed; fix by prefixing the line with `@`.
- **This package publishes as `@ondewo/t2s-client-angular`** (see `src/package.json` `name`) — the npm
  names across the ONDEWO clients are inconsistent, so check the manifest before querying npm.
- **The release `git commit` uses `--no-verify`** so husky cannot reformat the freshly generated
  `RELEASE.md` / `package.json` mid-commit.
- **`install_dependencies` must `git checkout -- package.json package-lock.json` then
  `npm install --include=dev`** — the release runs under `NODE_ENV=production` (which drops devDeps) and
  the build minimises the root `package.json`, so the type-aware eslint rules would otherwise fail to
  resolve `rxjs` / `@angular` / `@ngx-grpc`. `make eslint` now also runs in CI, so a type-aware eslint
  break surfaces on push instead of only at release time.
- **`make release` runs `git push`, which now fires `.husky/pre-push` → `npm test`.** That is intended (it
  is the last gate before code leaves the machine), but it means the release fails if the regenerated
  `api/` breaks a spec.
