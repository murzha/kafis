const gulp = require('gulp'),
    sass = require('gulp-dart-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

// Clean task
gulp.task('clean', function () {
    return del('dist');
});

// SCSS task
gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// CSS task
gulp.task('css', function () {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/slick-carousel/slick/slick-theme.css',
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('src/scss'))
        .pipe(browserSync.stream());
});

// HTML task
gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(browserSync.stream());
});

// JS task
gulp.task('script', function () {
    return gulp.src('src/js/*.js')
        .pipe(browserSync.stream());
});

// JS Libs task
gulp.task('js-libs', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});

// BrowserSync task
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
});

// Export task
gulp.task('export', function () {
    return gulp.src(['src/**/*', '!src/scss', '!src/scss/**/*'])
        .pipe(gulp.dest('dist'));
});

// Image Minification task
gulp.task('imagemin', function () {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Watch task
gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/js/*.js', gulp.series('script'));
});

// Build task
gulp.task('build', gulp.series('clean', 'export', 'imagemin'));

// Default task
gulp.task('default', gulp.parallel('css', 'scss', 'js-libs', 'browser-sync', 'watch'));
