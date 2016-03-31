var concat = require('concat-stream');

process.stdin
.pipe(concat(function(content)
	{
		process.stdout.write(content.toString().split("").reverse().join(""));
	}));
