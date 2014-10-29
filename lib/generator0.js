'use strict';

function* numbers() {
	for (let value = 1; value <= 5; value++) {
		yield value;
	}
}

export default () => {
	for (let val of numbers()) {
		console.log(val);
	}
};
