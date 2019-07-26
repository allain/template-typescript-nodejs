# template-typescript-nodejs

This repo represents a simple project with an ever improving build pipeline intended for building node.js apps using typescript.

## Current Scripts

**`npm run dev`**

Runs `npm run watch:build` and `npm run watch:test` concurrently.

**`npm run build`**

Builds dist/_.js files from src/_.ts using the typescript compiler.

**`npm test`**

Supports running any defined jest test in ./tests/\*

**`npm run clean`**

deletes generated files and any generated code reports (coverage, etc).
