var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-cssmin');

gulp.task('sass', function() {
    gulp.src('css/_src/main.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(sass({includePaths: ['./css/_src']}))
		.pipe(minifyCss())
        .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
	gulp.watch(['css/_src/*.scss', 'css/_src/*/*.scss'],['sass']);
});

gulp.task('development', ['sass', 'watch']);
