var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var tr = require('through2');
var split =require('split');
var gs = zlib.createGunzip();
var parser = tar.Parse();

var name = process.argv[2];
var pass = process.argv[3];
var cs = crypto.createDecipher(name,pass);


var filenames= [];
var md5 = [];
process.stdin.pipe(cs).pipe(gs).pipe(parser);
var i =0;
parser.on('entry',function(e)
{
	if(e.type !== 'File') return
		var cc = crypto.createHash('md5',{encoding :'hex'}); //tek kullanımlık şerefsiz
	e.pipe(cc).pipe(tr(function(buffer)
		{
			this.push(buffer.toString()+ " "+e.path+"\n" );
			
		})).pipe(process.stdout);


});