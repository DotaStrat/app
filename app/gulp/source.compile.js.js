var gulp, uglifyjs, concat;

gulp = require("gulp");
uglifyjs = require("gulp-uglifyjs");
concat = require("gulp-concat");

module.exports = function () {

	var distributionFolderPath, distributionFileName, sourceMap;

	distributionFolderPath = "dist";
	distributionFileName = "source.js";
	sourceMap = "public/src/**/*.js";

	gulp.task("source:compile:js", function () {
		gulp.src(sourceMap)
		.pipe(concat(distributionFileName))
		.pipe(uglifyjs())
		.pipe(gulp.dest(distributionFolderPath));
	});
};