var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');
var tslint = require('gulp-tslint');

gulp.task('default', function(){
    gutil.log("Hello gulp!");
});

gulp.task('purge', function(){
    return del(['dist',
    'node_modules/**/*',
    'public',
    'typings'])
});

gulp.task('tslint', function(){
    gulp.src(['client/**/*.ts?', 'server/**/*.ts?'])
        .pipe(tslint({formatter: "verbose"}))
        .pipe(tslint.report({emitError: false}));
});

gulp.task('watch', function(){
   gulp.watch(['client/**/*.ts?', 'server/**/*.ts?'], ['tslint'])
});