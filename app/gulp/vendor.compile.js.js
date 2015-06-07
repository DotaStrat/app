var gulp, uglifyjs, concat;

gulp = require("gulp");
uglifyjs = require("gulp-uglifyjs");
concat = require("gulp-concat");

module.exports = function () {

	var distributionFolderPath, distributionFileName, sourceMap;

	distributionFolderPath = "dist";
	distributionFileName = "vendor.js";
	sourceMap = [
		"public/bower_components/angular/angular.js",
		"public/bower_components/angular-ui-router/release/angular-ui-router.js"
	];

	gulp.task("vendor:compile:js", function () {
		gulp.src(sourceMap)
		.pipe(concat(distributionFileName))
		.pipe(uglifyjs())
		.pipe(gulp.dest(distributionFolderPath));
	});
};