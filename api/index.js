import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
	assert.equal(null, err);
	mdb = db;
});

const router = express.Router();

router.get('/contests', (req, res) => {
	let contests = {};
	mdb.collection('contests').find({})
		.project({
			categoryName: 1,
			contestName: 1
		})
		.each((err, contest) => {
			assert.equal(null, err);

			// if there is no contest to process
			if (!contest) {
				res.send({ contests });
				return;
			}

			contests[contest._id] = contest;
		});
});

router.get('/contests/:contestId', (req, res) => {
	mdb.collection('contests')
		.findOne({ _id: ObjectID(req.params.contestId) })
		.then((contest) => res.send(contest))
		.catch((err) => console.log(err));
});

router.get('/names/:nameIds', (req, res) => {
	const nameIds = req.params.nameIds.split(',').map((str) => ObjectID(str));
	let names = {};

	mdb.collection('names').find({ _id: { $in: nameIds } })
		.each((err, name) => {
			assert.equal(null, err);

			// if there is no name to process
			if (!name) {
				res.send({ names });
				return;
			}

			names[name._id] = name;
		});
});

export default router;
