'use strict';
let {readFile} = require('fs');
let path = require('path');

function* numbers() {
	let stuffIGot = [];
	for (let k = 0; k < 2; k++) {
		let itemReceived = yield k;
		stuffIGot.push(itemReceived);
	}
	console.log(stuffIGot);
}

export default () => {
	let iterator = numbers();
	console.log(iterator.next());
	console.log(iterator.next('present'));
	readFile(path.resolve(__dirname, 'resources/text1.txt'), 'utf8', function(err, data) {
		if (err) {throw err;}
		console.log(iterator.next(data));
	});
};
