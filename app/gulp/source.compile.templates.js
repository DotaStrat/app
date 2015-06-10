var gulp, angularTemplateCache;

gulp = require("gulp");
angularTemplateCache = require("gulp-angular-templatecache");

module.exports = function () {

	var templateSource, distributionFileName, distributionFolderPath;

	templateSource = "public/src/**/*.html";
	distributionFileName = "templates.js";
	distributionFolderPath = "dist";
	

	gulp.task("source:compile:templates", function () {
		gulp.src(templateSource)
		.pipe(angularTemplateCache(distributionFileName, {
			standalone: true,
			module: "dotaStratTemplates"
		}))
		.pipe(gulp.dest(distributionFolderPath));
	});
};