const gulp = require('gulp')
const series = gulp.series

const antes1 = cb =>{
    console.log('tarefas 1')
    return cb()
}
function copiar(callback) {
    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))
    return callback()
}
const fim = cb =>{
    console.log('fim')
    return cb()
}
module.exports.default = series(copiar)