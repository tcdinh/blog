var gulp = require('gulp');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

gulp.task('default', ['build', 'start'], function () {
	console.log('Starting gulp');
});

/*
gulp.task('lint', function (cb) {
	process.chdir('./Client')
	exec('ng lint', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('test', ['lint'], function (cb) {
	//process.chdir('./Client')
	exec('ng e2e', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
*/
gulp.task('build', function (cb) {
	process.chdir('./Client')
	exec('ng build --aot --prod', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('start', ['build'], function (cb) {
	process.chdir('../')
	exec('node ./server/server.js', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});
