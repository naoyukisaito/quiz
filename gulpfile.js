var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
require('es6-promise').polyfill();
var cssComb = require('gulp-csscomb');
var cleanCss = require('gulp-clean-css');
gulp.task('sass',function(){
	gulp.src(['./src/sass/!(_)*.scss'])
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoPrefixer())
		.pipe(cssComb())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(cleanCss())
		.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./build/css/'))
});

gulp.task('default',function(){
	gulp.watch('src/sass/**/*', ['sass']);
});
