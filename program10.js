var trumpet = require('trumpet');
var tru = trumpet();
var tr = require('through2');
var sel = tru.select('.loud').createStream();
var toUpper = tr(function(buffer,_,next)
{
	this.push(buffer.toString().toUpperCase());
	next();
})

sel.pipe(toUpper).pipe(sel);
process.stdin.pipe(tru).pipe(process.stdout);