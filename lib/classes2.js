"use strict";
class Meal1 {
	constructor(spam = 'spam and eggs') {
		this.spam = spam;
	}

	eat() {
		console.log('Eating ' + this.spam);
	}

	toss() {
		console.log('Tossing out ' + this.spam);
	}

	get meal() { return this.spam; }

	static announceMealtime() {
		console.log('Time to eat!');
	}
}

class Meal2 extends Meal1 {
	constructor() {
		super.constructor('spam spam spam and eggs');
	}

	toss() {
		super.toss();
		console.log('Also cleaning up the dishes');
	}
}

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
