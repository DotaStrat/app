var gulp;

gulp = require("gulp");

module.exports = function (given) {

	var sourceMap;
	sourceMap = [
		given.compile.source.css.source,
		given.compile.source.js.source,
		given.compile.source.templates.source
	];

	gulp.task(
		"source:compile", 
		[
			"source:compile:js",
			"source:compile:templates",
			"source:compile:css"
		], 
		function () {
			gulp.watch(
				sourceMap, 
				[
					"source:compile:js",
					"source:compile:templates",
					"source:compile:css"
				]
			);
		}
	);
};