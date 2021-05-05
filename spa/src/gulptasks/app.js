const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const babel = require('gulp-babel')



function appHTML(){
    return gulp.src('src/**/*.html')
           .pipe(htmlmin({collapseWhitespace: true}))
           .pipe(gulp.dest('build'))
}
function appJS(){
    return gulp.src('src/assets/js/**/*.js')
    .pipe(babel({presets: ['ENV']}))
    .pipe(uglify()).pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'))
}
function appCSS(){
    return  gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError()))
    .pipe(uglifycss({"uglifyComments": true}))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}
function appIMG(){
    return gulp.src('src/assets/img/**/*.*')
    .pipe(gulp.dest('build/assets/imgs'))
}
gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appIMG', appIMG)
gulp.task('appJS', appJS)
module.exports = {
    appCSS,
    appHTML,
    appIMG,
    appJS
}

