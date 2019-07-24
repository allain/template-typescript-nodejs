import fs from "fs"
import path from "path"
import builtins from "rollup-plugin-node-builtins"
import typescript from "rollup-plugin-typescript2"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

const builds = [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs"
      },
      {
        file: "dist/index.esm.js",
        format: "esm"
      }
    ],
    plugins: [
      typescript({}),
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
        format: "cjs"
      }
    ],
    plugins: [
      typescript({}),
      builtins(),
      resolve({
        preferBuiltins: true
      }),
      commonjs({})
    ]
  })
}

export default builds
