'use strict';

import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import rollup from 'rollup-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import clean from 'gulp-clean';
import {main as ngc} from '@angular/compiler-cli/src/main';
import rollupConfig from './rollup-config';

console.log(ngc);

gulp.task('ngc', ['clear'], (cb) => {
    let args = { _: [], p: 'tsconfig.json' };
    
    return ngc(args);
});

gulp.task('rollup', () => {
    return rollup(rollupConfig)
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        //.pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('clear', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('html', ['rollup'], () => {
    return gulp.src(['src/index.html'])
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['html']);

gulp.task('default', ['copy']);