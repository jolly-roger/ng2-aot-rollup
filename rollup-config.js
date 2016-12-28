import rollup      from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

export default {
    entry: 'src/main.js',
    //dest: 'dist/index.js', // output a single application bundle
    sourceMap: false,
    format: 'iife',
    plugins: [
        nodeResolve({
            jsnext: true,
            module: true,
            browser: true
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        uglify()
    ]
}