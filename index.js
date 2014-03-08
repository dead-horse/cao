/*!
 * cao - index.js
 * Copyright(c) 2014 dead_horse <dead_horse@qq.com>
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var co = require('co');
var wait = require('co-wait');
var defer = require('co-defer');
var each = require('co-each');
var thread = require('co-thread');
var parallel = require('co-parallel');
var gather = require('co-gather');

exports = module.exports = co;
exports.wait = wait;
exports.defer = defer;
exports.each = each;
exports.thread = thread;
exports.parallel = exports.all = parallel;
exports.gather = exports.gather;
