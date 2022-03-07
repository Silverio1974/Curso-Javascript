const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const unglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))

        .pipe(unglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

}

function fim(cb) {
    console.log('fim!!!')
    return cb()
}

exports.default = series(padrao)