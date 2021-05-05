const {parallel} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

function tranformaSASS() {
    return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglify({"uglifyComments": true }))
    .pipe(concat('estilo.min.css'))
    .pipe('build/css')
}
function copiarHTML() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}
exports.default = parallel(tranformaSASS, copiarHTML)