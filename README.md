# template-typescript-nodejs

This repo represents a simple project with an ever improving build pipeline intended for building node.js apps using typescript.

## Current Scripts

### `npm run dev`

Runs `npm run build:watch` and `npm run test:watch` concurrently.

### `npm run build` and `npm run build:watch`

Uses rollup to build quality javascript bundles that have been tree shaken, and generated for esm, and commonjs.

If src/bin.ts file is present it will also generate a dist/bin.cjs.js file.

### `npm test` and `npm run test:watch`

Supports running any defined jest test in ./tests/\*

### `npm run clean`

deletes generated files and any generated code reports (coverage, etc).
