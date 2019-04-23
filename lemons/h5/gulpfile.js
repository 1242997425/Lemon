const gulp = require("gulp");
const webserver = require("gulp-webserver");

gulp.task("server", function() {
    return gulp.src("./src/")
        .pipe(webserver({
            open: true,
            port: 8066,
            livereload: true,
            host: "169.254.19.66",
            proxies: [
                { source: "/api/login", target: "https://localhost:8066:/api/login" }
            ]
        }))
})