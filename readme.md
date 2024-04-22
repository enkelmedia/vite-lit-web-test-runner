# Demo: Lit, Vite, TypeScript and Web Test Runner

This repo demonstrates one approach to running [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/) to test [Lit](https://lit.dev/) elements created with TypeScript and built using [Vite](https://vitejs.dev/guide/).

This project also demonstrate be able to use TypeScript code with `import maps` and have the vite-plugin [vite-tsconfig-paths](https://www.npmjs.com/package/vite-tsconfig-paths) resolve these maps.

## Dependencies explained

* `lit` - Library/framework to build web components
* `@open-wc/testing` - Testing framework for web components
* `@types/mocha` - Types for testing (describe, it etc)
* `@web/test-runner` - Web Test Runner, runs test in real browser
* `@web/test-runner-playwright` - Playwright for Web Test Runner
* `@remcovaes/web-test-runner-vite-plugin` - Allow test files to be built with Vite and no the [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/). This saves us from using `@web/dev-server-esbuild` and `@web/dev-server-import-maps` which caused me a lot of headache (never got it to work).

* `vite` - Build tool
* `vite-tsconfig-paths` - Plugin for Vite to map "paths" from `tsconfig.json`

## Package.json explained

```
"scripts": {
    ...
    "test": "web-test-runner",
    "test:watch": "web-test-runner --watch"
}
```

* `npm run test` - Will just run all tests
* `npm run test:watch` - Will run test, watch and allow us to debug.
