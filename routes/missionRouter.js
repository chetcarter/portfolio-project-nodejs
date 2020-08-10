const express = require('express');
const bodyParser = require('body-parser');

const missionRouter = express.Router();

missionRouter.use(bodyParser.json());

missionRouter
	.route('/')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end('Will send all the missions to you');
	})
	.post((req, res) => {
		res.end(
			`Will add the mission: ${req.body.program} with the start date: ${req.body.startdate} and the end date: ${req.body.enddate} and the number of launches: ${req.body.launches} and the note: ${req.body.note}`
		);
	})
	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /missions');
	})
	.delete((req, res) => {
		res.end('Deleting all missions');
	});

missionRouter
	.route('/:missionId')
	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next();
	})
	.get((req, res) => {
		res.end(`Will send details of the mission: ${req.params.missionId} to you`);
	})
	.post((req, res) => {
		res.statusCode = 403;
		res.end(
			`POST operation not supported on /missions/${req.params.missionId}`
		);
	})
	.put((req, res) => {
		res.write(
			`Updating the mission: ${req.body.program} with the start date: ${req.body.startdate} and the end date: ${req.body.enddate} and the number of launches: ${req.body.launches} and the note: ${req.body.note}`
		);
	})
	.delete((req, res) => {
		res.end(`Deleting mission: ${req.params.missionId}`);
	});

module.exports = missionRouter;
