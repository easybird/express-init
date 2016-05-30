const gulp = require("gulp");

gulp.task("transpileBackend", function() {
    console.log("Start transpiling back-end...");
    require("babel-register")({
        ignore: [/node_modules/, /server\/public\/javascripts/]
    });
});

