const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifycss({"uglycomments": false}))
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}
function depsFONTS() {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('deps/assets/fonts'))
}

module.exports = {
    depsFONTS,
    depsCSS
}