const gulp = require("gulp");

require("./gulp/transpileBackEnd.task");
require("./gulp/startupExpress.task");

gulp.task("default", function() {
    console.log(". tasks");
    console.log("├───startServer");
    console.log("│   ├───transpileBackend");
    console.log("│   └───startupExpress");
});

gulp.task("startServer", ["transpileBackend", "startupExpress"], function() {
   console.log("Server started");
});