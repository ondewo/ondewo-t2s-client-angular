# Release History

*****************

## Release ONDEWO T2S Angular Client 6.6.3

### Improvements

* **TLS endpoint builder for the browser gRPC-web client.** `buildGrpcWebHost(config)` turns the `host` / `port` /
  `useSecureChannel` fields every ONDEWO SDK takes into the gRPC-web base URL (the `host` setting of
  `@ngx-grpc/grpc-web-client`): `https://` by default; `http://` only with `useSecureChannel: false`, and then a
  `console.warn` naming `host:port`. A bare IPv6 literal is bracketed (`https://[::1]:8443`); a host that already
  carries an `http(s)://` scheme is used as given, and an `http://` URL together with `useSecureChannel: true` is
  refused.
* **Certificate and key fields are refused instead of being silently dropped.** In a browser the user agent owns the
  TLS handshake: it trusts its own certificate store and presents a client certificate only from the browser / OS
  store, so application code can neither add a CA nor attach a client identity. A non-empty `grpcCert`,
  `grpcClientCert` or `grpcClientKey` (or their snake_case spellings, listed in `BROWSER_UNSUPPORTED_TLS_FIELDS`)
  throws a `GrpcWebEndpointError`; a private key is never shipped to a browser. An empty host, a `host:port` string,
  and a port outside 1-65535 are refused as well. Error messages name the field, never its value.
* Mutual TLS works through the browser's certificate store, or by letting the gRPC-web proxy (Envoy) terminate the
  browser's TLS and use mutual TLS upstream. Node.js callers that need certificates in code use the nodejs client.
* README: new section "TLS, mutual TLS and certificates" (modes table, Angular example, openssl test PKI, security
  notes, troubleshooting of the browser's handshake errors).

### Tests

* Unit tests for every rule above; real-handshake tests run the built URL against an HTTPS server with an in-test
  openssl PKI (trusted CA, CRLF-encoded CA, unrelated CA, client certificate required, `[::1]`).
* A jest spec pins the release-notes slice: the Makefile's slice command, the spelling of every heading, the closing
  `*****` separators, one section per version, non-empty notes for the released version, and `src/RELEASE.md`
  identical to `RELEASE.md`.

### Documentation

* RELEASE.md regains the sections and bullets that only the GitHub release bodies or the tags carried, and
  misspelled headings now match the Makefile's slice.

### Build

* Generated with ondewo-proto-compiler 5.15.2 (6.6.2 was generated with 5.13.0).
* The release stages the regenerated root `public-api.ts` and `index.d.ts`, so the release tag describes the package
  npm receives; the root README.md / RELEASE.md are copied from `src/` by the build.
* The release no longer errors on the removed `esm2022` output or on `git pull` in a submodule pinned to a tag
  (detached HEAD).
* `.npmignore` keeps the test surface out of a root-level `npm pack`; CI runs on every branch and gates on eslint;
  the 100% jest coverage gate includes `src/examples`.
* Internal: `KeycloakTokenProvider` and `resolveToken` replace ternaries with early returns.

*****************

## Release ONDEWO T2S Angular Client 6.6.2

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written Keycloak auth sources moved from `src/lib/auth` to `src/auth`. The angular proto-compiler's `ng-package.json` sets ng-packagr's `dest` to `lib`, and ng-packagr 20.x deletes that directory recursively *before* tsc compiles the entry point - so everything under `src/lib` was removed from the build tree while the generated barrel still exported it. `src/auth` is outside `dest` and is the first location the compiler's `generate-public-api.sh` looks for.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `ondewo-proto-compiler` moved from 5.11.0 to [5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0), which star-exports the hand-written barrel from the generated public-api. 6.6.1 announced this bump but shipped with 5.11.0 pinned, so the published package contained no `AuthGrpcInterceptor`, `KeycloakTokenProvider`, `authHttpInterceptor` or `provideOndewoT2sAuth` symbol. They are exported from the package root as of this release. The generated protobuf stubs are byte-identical across the two compiler versions.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) `tests/hand-written-barrel-location.spec.ts` reads `dest` from the compiler's own `ng-package.json` and fails if any hand-written source is placed under it again. The `tests` GitHub Actions workflow checks the compiler out at the tag the `Makefile` pins so the guard has that file to read.

*****************

## Release ONDEWO T2S Angular Client 6.6.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO T2S Angular Client 6.6.0

### Improvements

* Tracking API Version [6.6.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.6.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 6.5.0

### Improvements

* Tracking API Version [6.5.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.5.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 6.4.2

### Improvements

* Tracking API Version [6.4.2](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.4.2) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 6.4.1

### Improvements

* Tracking API Version [6.4.1](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.4.1) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 6.4.0

### Improvements

* Tracking API Version [6.4.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.4.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )
* Keycloak bearer authentication: `TokenProvider` with gRPC-web and HTTP interceptors, and a ready-made `KeycloakTokenProvider` with background offline-token refresh
* Generated with [ondewo-proto-compiler 5.11.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.11.0)

*****************

## Release ONDEWO T2S Angular Client 6.2.0

### Improvements

* Tracking API Version [6.2.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.2.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 6.1.1

### Improvements

* Upgrade dependency to Angular < 21.0.0

*****************

## Release ONDEWO T2S Angular Client 6.1.0

### Improvements

* Tracking API Version [6.1.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.1.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 6.0.0

### Improvements

* Tracking API Version [6.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/6.0.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 5.3.0

### Improvements

* Tracking API Version [5.3.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.3.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 5.2.0

### Improvements

* Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 5.1.0

### Improvements

* Tracking API Version [5.1.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.1.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 5.0.1

### Improvements

* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API
  Version [5.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 5.0.0

### Improvements

* Tracking API
  Version [5.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )

*****************

## Release ONDEWO T2S Angular Client 4.3.0

* Track version 4.3.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/4.3.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************

## Release ONDEWO T2S Angular Client 4.0.0

* Track version 4.0.2 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/4.0.2)

*****************

## Release ONDEWO T2S Angular Client 3.0.1

* Track version 3.0.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/3.0.0)
* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0

*****************

## Release ONDEWO T2S Angular Client 3.0.0

* Track version 3.0.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/3.0.0)

### Breaking Changes

* Rename Description, GetServiceInfoResponse, Inference, and Normalization messages to include T2S

*****************

## Release ONDEWO T2S Angular Client 2.0.0

* Track version 2.0.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/2.0.0)

*****************

## Release ONDEWO T2S Angular Client 1.5.2

* Track version 1.5.2 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/1.5.2)
* Release on [NPM](https://www.npmjs.com/package/@ondewo/t2s-client-angular)

*****************

## Release ONDEWO T2S Angular Client 1.5.1

* Skipped version due to NPM registry issues

*****************

## Release ONDEWO T2S Angular Client 1.5.0

* Track version 1.5.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/1.5.0)
* Compatible with ONDEWO-T2S 1.5.* GRPC server
* Upgraded from ngx-grpc 0.3.1 to 2.1.0

*****************

## Release ONDEWO T2S Angular Client 1.4.0

* Track version 1.4.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/1.4.0)
* Compatible with ONDEWO-T2S 1.4.* GRPC server

*****************
