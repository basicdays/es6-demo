'use strict';
let {readFile} = require('fs');
let path = require('path');

function* files(filePaths) {
	let results = [];
	for (let file of filePaths) {
		let fileContents = yield file;
		results.push(fileContents);
	}
	console.log(results);
}

function process(fileIterator, fileResponse) {
	let curFileIteration = fileIterator.next(fileResponse);
	if (curFileIteration.done) {
		return;
	}
	let file = path.resolve(__dirname, curFileIteration.value);
	readFile(file, 'utf8', function(err, res) {
		if (err) {fileIterator.throw(err);}
		else {process(fileIterator, res);}
	});
}

export default () => {
	let filesToProcess = ['resources/text1.txt', 'resources/text2.txt', 'resources/text3.txt'];
	let iterator = files(filesToProcess);
	process(iterator);
};
