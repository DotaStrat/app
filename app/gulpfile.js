var path, gulpModulesPath;
path = require("path");
gulpModulesPath = path.join(__dirname, 'gulp');

require(gulpModulesPath+"/vendor.compile.js.js")();