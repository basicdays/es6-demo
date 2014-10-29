'use strict';
export default () => {
	var promise = new Promise(function (resolve, reject) {
		// do a thing, possibly async, then…

		if (false) {
			resolve("Stuff worked!");
		}
		else {
			reject(Error("It broke"));
		}
	});

	promise.then(function (result) {
		console.log(result); // "Stuff worked!"
	}, function (err) {
		console.log(err); // Error: "It broke"
	});
};
