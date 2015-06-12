var gulp, uglifyjs, concat;

gulp = require("gulp");
uglifyjs = require("gulp-uglifyjs");
concat = require("gulp-concat");

module.exports = function () {
	
	gulp.task("vendor:compile:js", function () {
		gulp.src(given.compile.vendor.js.source)
		.pipe(concat(given.compile.vendor.js.distributionFileName))
		.pipe(uglifyjs())
		.pipe(gulp.dest(given.compile.js.distributionFolderPath));
	});
};