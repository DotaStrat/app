var gulp, angularTemplateCache;

gulp = require("gulp");
angularTemplateCache = require("gulp-angular-templatecache");

module.exports = function (given) {

	gulp.task("source:compile:templates", function () {
		gulp.src(given.compile.source.templates.source)
		.pipe(angularTemplateCache(given.compile.source.templates.distributionFileName, {
			standalone: true,
			module: "templates"
		}))
		.pipe(gulp.dest(given.compile.distributionFolderPath));
	});
};