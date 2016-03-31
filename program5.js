var split = require('split');
var through = require('through2');
var z = 1;
var stream = through(function(buffer,_,next)
	{
		if(z%2 !== 1)
		{
			buffer = buffer.toString().toUpperCase();
		}
		else
		{
			buffer = buffer.toString().toLowerCase();
		} 
		z++;
		console.log(buffer.toString());
		next();
		
	});		
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
