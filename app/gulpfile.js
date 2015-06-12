var path, gulpModulesPath, configuration;

path = require("path");
configuration = require(__dirname+"/gulp.configuration.js")();
gulpModulesPath = path.join(__dirname, 'gulp');

configuration.tasks.forEach(function (taskName) {
	require(gulpModulesPath+"/"+taskName)(configuration);
});