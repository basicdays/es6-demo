'use strict';
let {MongoClient} = require('mongodb');

export default () => {
	MongoClient.connect('mongodb://localhost/test', function(err, db) {
		if (err) {error(err);}
		db.collection('demodata', function(err, collection) {
			if (err) {error(err);}
			collection.find().count(function(err, result) {
				if (err) {error(err);}
				console.log(result);
				db.close(function(err) {
					if (err) {error(err);}
				});
			});
		});
	});
};

function error(err) {
	console.error(err);
	process.exit();
}
