var connect = require('connect');
var serveStatic = require('serve-static');
var yargs = require('yargs').argv;

if(yargs.p) {
	connect().use(serveStatic(__dirname)).listen(yargs.p, function(){
	    console.log('Server running on ', yargs.p ,'...');
	});
}else {
	connect().use(serveStatic(__dirname)).listen(8080, function(){
	    console.log('Server running on ', 8080 ,'...');
	});
}