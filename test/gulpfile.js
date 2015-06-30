var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var tsReference = require('..');

gulp.task('clean', function () {
    del.sync('dest');
});

gulp.task('default', ['clean'], function(){
    var dest = 'dest/include.d.ts';
	gulp.src('src/**/*.ts')
        .pipe(tsReference(dest))
        .pipe(gulp.dest(dest));
});
