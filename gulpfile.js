const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

const hub = new HubRegistry([conf.path.tasks('*.js')]);
gulp.registry(hub);

gulp.task('build', gulp.series('clean', gulp.parallel('other', 'webpack:dist', 'copy:docs')));
gulp.task('serve', gulp.series('webpack:watch', 'watch', 'browsersync'));
gulp.task('default', gulp.series('clean', 'build'));
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
  browserSync.reload();
  cb();
}

function watch(done) {
  gulp.watch(conf.path.tmp('index.html'), reloadBrowserSync);
  done();
}
