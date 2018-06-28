var fs = require ('fs')
var zlib = require('zlib');
var gzip = zlib.createGzip();
// var gzip = zlib.createGunzip();
 
 var readable = fs.createReadStream(__dirname+'/text.txt');
 var compressed = fs.createWriteStream(__dirname+'/text.txt.gz');
 readable.pipe(gzip).pipe(compressed)

// var readable = fs.createReadStream(__dirname+'/text.txt.gz');
// var extracted = fs.createWriteStream(__dirname+'/textExtracted.txt');

// readable.pipe(gzip).pipe(extracted)