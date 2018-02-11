'use strict';

const {ok} = require('assert');

const glob = require('glob');
const unglobbable = require('.');

glob(unglobbable, {silent: true}, err => {
	ok(err);
	ok(err.code === 'EACCES' || err.code === 'EPERM');

	console.log('Passed.');
});
