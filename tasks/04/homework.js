// // Task 01
var fs = require("fs"),
	util = require("util"),
	ms = 1000;

// // Callback hell
// function cbHell(filePath1, filePath2, filePath3) {
// 	console.log(util.format("Waiting %s ms", ms));
// 	setTimeout(function() {
// 		fs.writeFile(filePath1, "Random string I guess", function (err) {
// 			if (err) throw err;
// 			console.log(util.format("File %s written", filePath1));
// 			console.log(util.format("Waiting %s ms", ms));
// 			setTimeout(function() {
// 				fs.writeFile(filePath2, "Random string for the second file", function (err) {
// 					if (err) throw err;
// 					console.log(util.format("File %s written", filePath2));
// 					console.log(util.format("Waiting %s ms", ms));
// 					setTimeout(function() {
// 						fs.readFile(filePath1, function (err, file1Data) {
// 							if (err) throw err;
// 							console.log(util.format("File %s read", filePath1));
// 							console.log(util.format("Waiting %s ms", ms));
// 							setTimeout(function() {
// 								fs.readFile(filePath2, function (err, file2Data) {
// 									if (err) throw err;
// 									console.log(util.format("File %s read", filePath2));
// 									console.log(util.format("Waiting %s ms", ms));
// 									setTimeout(function() {
// 										fs.writeFile(filePath3, file1Data+file2Data, function (err) {
// 											if (err) throw err;
// 											console.log(util.format("File %s read", filePath3));
// 										});
// 									}, ms);
// 								});
// 							}, ms);
// 						});
// 					}, ms);
// 				});
// 			}, ms);
// 		});
// 	}, ms);
// }

// cbHell("file1.txt", "file2.txt", "file3.txt");
function writeFilePromise(filePath, str) {
	return function(resolve, reject) {
		return new Promise(function(resolve, reject) {
			fs.writeFile(filePath, str, function (err) {
				if (err) reject(err);
				console.log(util.format("File %s written", filePath));
				resolve();
			});
		});
	};
}

function readFilePromise(filePath) {
	return function(resolve, reject) {
		return new Promise(function(resolve, reject) {
			fs.readFile(filePath, function (err, data) {
				if (err) reject(err);
				console.log(util.format("File %s read", filePath));
				resolve(data);
			});
		});
	};
}

function waitPromise() {
	return new Promise(function(resolve, reject) {
		console.log(util.format("Waiting %s ms", ms));
		setTimeout(resolve, ms);
	});
}

function promisifiedHeaven(filePath1, filePath2, filePath3) {
	var text = '';

	return waitPromise()
	.then(writeFilePromise(filePath1, 'Random string I guess'))
	.then(waitPromise)
	.then(writeFilePromise(filePath2, 'Random string for the second file'))
	.then(waitPromise)
	.then(readFilePromise(filePath1))
	.then(function (data) {
		text += data.toString();
	})
	.then(waitPromise)
	.then(readFilePromise(filePath2))
	.then(function (data) {
		text += data.toString();
	})
	.then(waitPromise)
	.then(writeFilePromise(filePath3, text))
	.catch(function(reason) {
            console.log('Exception: ' + reason);
    });
}

promisifiedHeaven("file1.txt", "file2.txt", "file3.txt")
	.then(function(){ console.log('Done') });