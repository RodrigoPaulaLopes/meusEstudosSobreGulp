// criando constates dos modulos importados
const {series} = require('gulp')
const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

function padrao(cb) {
    //dizer ao gulp onde ele deve pegar os arquivos js
    gulp.src('src/**/*.js')
    //configurar o babel sem arquivos de comentarios 
    //e que ele coloque os arquivos js na versão mais nova
    .pipe(babel({
        comments: false,
        presets: ['venv']
    }))
    //deixa o codigo com menos espaços e menor
    .pipe(uglify())
    //pega todos os arquivos e junta eles num arquivo só 
    .pipe(concat())
    //coloca esse novo arquivo criado e coloca ele numa nova pasta chamada build
    .pipe(gulp.dest('build'))
    
    return cb
}

exports.default = series(padrao)