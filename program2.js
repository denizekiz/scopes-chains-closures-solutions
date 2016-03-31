var fileName = process.argv[2];
var fs = require('fs');
fs.createReadStream(fileName).pipe(process.stdout);
