var http = require('http');
var through = require('through2');
var port = process.argv[2];

var server = http.createServer(function(req,res)
	{
		if(req.method == 'POST')
		{
			req.pipe(through(function(buffer,_,next)
			{

				buffer = buffer.toString().toUpperCase();
				this.push(buffer);
				next();
			})).pipe(res);
		}
		else res.end('send me a Post \n');

	});
	
	
server.listen(port);