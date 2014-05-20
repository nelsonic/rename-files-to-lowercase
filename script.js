var fs = require('fs');

var testfilesdir = 'testfiles',
	renameddir   = 'renamed';

var ncp = require('ncp').ncp; //https://github.com/AvianFlu/ncp
// copy the testfiles directory to renamed:
ncp(testfilesdir, renameddir, function (err) {
	if (err) {
	return console.error(err);
	}
 	console.log('directory copied');

 	// walk through all the files in "testdirectory"
	fs.readdir(renameddir, function(err,files){
		if(err) {
			console.log('ERROR:',err);
		}

		var dir = __dirname +'/' + renameddir +'/';
		for (var i = files.length - 1; i >= 0; i--) {
			console.log('File:',files[i]);
			if(typeof files[i] !== 'undefined') {
				var file = files[i];
				// rename each file in the "renamed" dir toLowerCase:
				fs.renameSync(dir+file, dir+file.toLowerCase())
			console.log(file +' >> '+file.toLowerCase());
			}
		};
	})
});