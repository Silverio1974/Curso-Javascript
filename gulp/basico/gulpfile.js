const gulp = require('gulp')
// const series = gulp.series //
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(cb) {
    // console.log('Tarefa de coipiar') //

    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //   .pipe(gulp.dest('pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'))

    gulp.src('pastaA/**/*.txt')

    /*   .pipe(imagemPelaMetade())
        .pipe(imagemEmPretoEBranco())
        .pipe(transformacaoA())
        .pipe(transformacaoB())
        .pipe(transformacaoC()) */
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}



module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)