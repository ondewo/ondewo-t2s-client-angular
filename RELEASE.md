# Release History

*****************

## Release ONDEWO T2S Angular Client 6.6.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

***************** 
## Release ONDEWO T2S Angular Client 5.3.0

### Improvements 
* Tracking API Version [5.3.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.1.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )


***************** 
## Release ONDEWO T2S Angular Client 5.2.0

### Improvements 
* Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.1.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )


***************** 
## Release ONDEWO T2S Angular Client 5.1.0

### Improvements 
* Tracking API Version [5.1.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.1.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )


***************** 
## Release ONDEWO T2S Angular Client 5.0.1

### Improvements 
* Optimized for Angular 16 (esm2022 and fesm2022)
* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )



***************** 
## Release ONDEWO T2S Angular Client 5.0.0

### Improvements 
* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-t2s-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-t2s-api/) )


*****************
## Release ONDEWO T2S Angular Client 4.3.0

### Improvements 
* Track version 4.3.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/4.3.0)
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them


*****************
## Release ONDEWO T2S Angular Client 4.0.0

### Improvements 
* Track version 4.0.2 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/4.0.2)


*****************
## Release ONDEWO T2S Angular Client 3.0.1

### Improvements 
* Track version 3.0.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/3.0.0)
* Upgraded to Angular >= 13.x.x and ngx-grpc >=3.0.0


*****************
## Release ONDEWO T2S Angular Client 3.0.0

### Improvements 
* Track version 3.0.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/3.0.0)


*****************
## Release ONDEWO T2S Angular Client 2.0.0

### Improvements 
* Track version 2.0.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/2.0.0)


*****************
## Release ONDEWO T2S Angular Client 1.5.2

### Improvements 
* Track version 1.5.2 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/1.5.2)


*****************
## Release ONDEWO T2S Angular Client 1.5.1

### Improvements 
* Skipped version due to NPM registry issues


*****************
## Release ONDEWO T2S Angular Client 1.5.0

### Improvements 
* Track version 1.5.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/1.5.0)
* Upgraded from ngx-grpc 0.3.1 to 2.1.0

*****************
## Release ONDEWO T2S Angular Client 1.4.0

### Improvements 
* Track version 1.4.0 of [ONDEWO T2S API](https://github.com/ondewo/ondewo-t2s-api/releases/tag/1.4.0)

