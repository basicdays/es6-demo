"use strict";

let Meal1 = function(spam = 'spam and eggs') {
	this.spam = spam;
};
Meal1.announceMealtime = () => {
	console.log('Time to eat!');
};
Object.defineProperty(Meal1.prototype, 'eat', {
	configurable: true, enumerable: false, writable: true,
	value: function eat() {
		console.log('Eating ' + this.spam);
	}
});
Object.defineProperty(Meal1.prototype, 'toss', {
	configurable: true, enumerable: false, writable: true,
	value: function toss() {
		console.log('Tossing out ' + this.spam);
	}
});
Object.defineProperty(Meal1.prototype, 'meal', {
	configurable: true, enumerable: true,
	get: function meal() {
		{ return this.spam; }
	}
});

let Meal2 = function() {
	Meal1.call(this, 'spam spam spam and eggs');
};
Meal2.__proto__ = Meal1;
Meal2.prototype = Object.create(Meal1.prototype);
Meal2.prototype.constructor = Meal2;
Object.defineProperty(Meal2.prototype, 'toss', {
	configurable: true, enumerable: false, writable: true,
	value: function toss() {
		Meal1.prototype.toss.call(this);
		console.log('Also cleaning up the dishes');
	}
});

export default () => {
	let lunch = new Meal1();
	let dinner = new Meal2();

	Meal2.announceMealtime();
	console.log('lunch is ' + lunch.meal);
	lunch.eat();
	lunch.toss();

	console.log();

	console.log('dinner is ' + dinner.meal);
	dinner.eat();
	dinner.toss();
};
