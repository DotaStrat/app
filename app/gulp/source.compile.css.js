var gulp, sass;

gulp = require("gulp");
sass = require("gulp-sass");

module.exports = function (given) {

	gulp.task("source:compile:css", function () {
		gulp.src(given.compile.source.css.entry)
	    .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(given.compile.distributionFolderPath));
	});
};