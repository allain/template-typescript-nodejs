import fs from "fs"
import path from "path"

import builtins from "rollup-plugin-node-builtins"
import typescript from "rollup-plugin-typescript2"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import json from "rollup-plugin-json"

const builds = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        exports: "named"
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        exports: "named"
      }
    ],
    plugins: [
      typescript({}),
      json(),
      builtins(),
      resolve({
        preferBuiltins: true
      }),
      commonjs({})
    ]
  }
]

if (fs.existsSync(path.join(__dirname, "src", "bin.ts"))) {
  builds.push({
    input: "src/bin.ts",
    output: [
      {
        file: "dist/bin.cjs.js",
        format: "cjs",
        exports: "named"
      }
    ],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true
      }),
      builtins(),
      commonjs({}),
      resolve({
        preferBuiltins: true
      })
    ]
  })
}

export default builds
