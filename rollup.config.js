import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import typescript from "@rollup/plugin-typescript"
import pkg from './package.json'


export default {
    input: 'src/index.ts',
    output: {
        file: pkg.main,
        format: 'cjs',
        exports: 'named'
    },
    external: [
        "@babel/runtime",
        "react",
        "react-dom",
        "classnames",
        "color",
        "uuid",
    ],
    plugins: [
        postcss({
            modules: true,
        }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        babel({
            babelHelpers: "runtime",
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
            extensions: [".tsx", ".ts", ".jsx", ".js", ".mjs"],
            exclude: 'node_modules/**',
        }),
        resolve(),
        commonjs(),
    ]
}