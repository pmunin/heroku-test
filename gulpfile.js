var gulp = require('gulp');

var jsFiles = ["*.js", "src/**/*.js"];

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson : require('./bower.json'),
        directory: './public/lib'
    };
    return gulp.src('./views/partial/header.ejs')
        .pipe(wiredep(options))
        .pipe(gulp.dest('./views/partial'));
    
});
