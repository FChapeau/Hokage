var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');
var tslint = require('gulp-tslint');
var webpack = require('gulp-webpack');

gulp.task('default', function(){
    return gutil.log("Hello gulp!");
});

gulp.task('purge', function(){
    return del(['dist',
    'node_modules/**/*',
    'public',
    'typings'])
});

gulp.task('tslint', function(){
    return gulp.src(['client/**/*.ts?', 'server/**/*.ts?'])
        .pipe(tslint({formatter: "verbose"}))
        .pipe(tslint.report({emitError: false}));
});

gulp.task('webpack', function(){
    return gulp.src('client/index.tsx')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function(){
    //gulp.watch(['client/**/*.ts?', 'server/**/*.ts?'], ['tslint']);
    gulp.watch(['client/**/*.ts?'], ['webpack']);
});