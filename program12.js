var duplexer2 = require('duplexer2');
var tr = require('through2').obj;

module.exports = function(counter)
{
	var counts = {} 
	return duplexer2({writableObjectMode:true},tr(function(buffer,_,next)
		{
			var country = buffer.country;
			if(counts[country]>0)
			{
				counts[country] = counts[country] + 1;
			}
			else 
			{
				counts[country] = 1;
			}
			next();
		},function()
		{
			counter.setCounts(counts);
		}),counter);
};