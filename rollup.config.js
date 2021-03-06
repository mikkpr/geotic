import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        dir: 'build',
        name: 'geotic',
        format: 'es',
        sourcemap: true,
    },
    plugins: [babel(), commonjs(), resolve({ browser: true })],
};
