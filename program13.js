var combine = require('stream-combiner');
var tr = require('through2');
var split = require('split');
var zlib = require('zlib');
module.exports = function()
{
	var books ;
	var genres;
	return combine(split(),tr(function(buffer,_,next)
			{
				if(buffer.length === 0)
				{
					return;
				}
				
				buffer = JSON.parse(buffer);
				//console.log(JSON.stringify(buffer));
				if(buffer.type === 'genre')
				{
					if(books)
					{
						console.log(JSON.stringify(books) +"\n");
						this.push(JSON.stringify(books)+"\n" );

					}
					
					books = {
						name : buffer.name,
						books : []
					};				
				}
				else if(buffer.type === "book")
				{

					books.books.push(buffer.name);
				}
				next();
		},function()
		{
				console.log(JSON.stringify(books) +"\n");
				genres.push(JSON.stringify(books) +"\n");
				this.push(null);
		
		}),zlib.createGzip());

};