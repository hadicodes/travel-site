const gulp = require("gulp"),
    watch = require("gulp-watch"),
    postcss = require("gulp-postcss"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssImport = require("postcss-import");
    autoprefixer = require("autoprefixer");

gulp.task('default', function () {
    console.log("Hooray Gulp works!");
});

gulp.task('html', function () {
    console.log("Something useful done to your html here!");
});

gulp.task('styles', function () {
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
        .pipe(gulp.dest("./app/temp/styles"));
});

// WATCH
gulp.task('watch', function () {
    watch("./app/assets/styles/**/*.css", function () {
        gulp.start("styles");
    });
});