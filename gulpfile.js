var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');

gulp.task('default',['style','script'],function () {
});

gulp.task('script', function() {
    gulp.src([
		'main.js'
    ])
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('public/js'))
});
gulp.task('style', function() {
    gulp.src([
		'main.css'
    ])
        .pipe(cssmin())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/css'))
});
