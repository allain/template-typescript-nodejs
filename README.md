# template-npm-project

This repo represents a simple project with an ever improving build pipeline intended for building and publishing npm modules.

## Current Scripts

### `npm run build`

Uses rollup to build greate quality javascript bundles that have been tree shaken, and generated for esm, and commonjs.

### `npm test`

Currently supports testing with jest, but does not supports esm modules yet. It'll need babel configured for that.
