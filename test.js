'use strict';

const test = require('tape');

const fastGlob = require('fast-glob');
const glob = require('glob');
const unglobbable = require('.');

test('unglobbable', async t => {
	t.plan(2);

	glob(unglobbable, {silent: true}, err => t.ok(err, 'should foil `glob`.'));

	try {
		await fastGlob(unglobbable);
		t.fail('fast-glob unexpectedly succeeded.');
	} catch (err) {
		t.ok(err, 'should foil `fast-glob`.');
	}
});
