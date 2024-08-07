const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));

}

function comprimeJavaScript() {
    return gulp.src('./source/styles/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/script'));
}


function compilaSass() {
    return gulp.src('./source/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

exports.default = gulp.series(funcaoPadrao);
exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;