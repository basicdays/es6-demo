'use strict';
let co = require('co');
let thunkify = require('thunkify');
let {MongoClient} = require('mongodb');

function getConnection(connectionString) {
	return function(next) {
		MongoClient.connect(connectionString, next);
	};
}

export default () => {
	co(function* () {
		try {
			let db = yield getConnection('mongodb://localhost/test');
			let collection = yield thunkify(db.collection.bind(db))('demodata');
			let query = collection.find();
			let count = yield thunkify(query.count.bind(query))();
			console.log(count);
			db.close();
		} catch (ex) {
			console.error(ex);
		}
	})();
};
