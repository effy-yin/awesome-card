'use strict';

const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css(cb) {
    console.log(123)
    return src('./src/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(dest('./dist/'), {sourcemaps: true});
        cb()
}



watch(['src/*.scss'], css);
exports.default = css;

