var gulp, uglifyjs, concat;

gulp = require("gulp");
uglifyjs = require("gulp-uglifyjs");
concat = require("gulp-concat");

module.exports = function (given) {
	
	gulp.task("source:compile:js", function () {
		gulp.src(given.compile.source.js.source)
		.pipe(concat(given.compile.source.js.distributionFileName))
		.pipe(uglifyjs())
		.pipe(gulp.dest(given.compile.distributionFolderPath));
	});
};