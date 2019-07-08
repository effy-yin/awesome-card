'use strict';

const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css(cb) {
    src('./src/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(dest('./dist/'));
    cb()
}

watch('*.scss', {ignoreInitial: false}, css);

exports.default = css;

