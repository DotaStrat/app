module.exports = function () {
	return {
		tasks: [
			"vendor.compile.js.js",
			"source.compile.templates.js",
			"source.compile.js.js",
			"source.compile.css.js",
			"source.compile.js",
		],	
		compile: {
			distributionFolderPath: "dist",
			vendor: {
				js: {
					distributionFileName: "vendor.js",
					source: [
						"public/bower_components/angular/angular.js",
						"public/bower_components/angular-ui-router/release/angular-ui-router.js"
					],
				}
			},
			source: {
				js: {
					distributionFileName: "source.js",
					source: "public/src/**/*.js",
				},
				css: {
					entry: "public/style/style.scss",
					source: "public/style/**/*.scss",
				},
				templates: {
					distributionFileName: "templates.js",
					source: "public/src/**/*.html",
				}
			},
		}
	};
};