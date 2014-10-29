'use strict';

function* fibonacci() {
	let prev1 = 0, prev2 = 1;
	while (true) {
		let curr = prev1 + prev2;
		yield curr;
		prev1 = prev2;
		prev2 = curr;
	}
}

export default ()=> {
	let iterator = fibonacci(),
		curIteration = iterator.next();
	while (!curIteration.done) {
		let n = curIteration.value;
		if (n > 1000) {
			break;
		}
		console.log(n);
		curIteration = iterator.next();
	}
};
