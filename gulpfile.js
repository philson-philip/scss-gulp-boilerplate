'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');


gulp.task('default', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({
					browsers: ['last 4 versions'],
					cascade: false
				}))
        .pipe(size())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['default']);
});
