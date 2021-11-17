"use strict";
const debug = require("debug")("dvori:core");

const { pipe } = require("@dvori/utils");
// const plugins = require("./plugins");
// const middleware = require("./middleware");

const createClient = require("./src/create-client");
const composePlugins = require("./src/compose-plugins");

const composeMiddleware = (...middlewares) => {
	return pipe(...middlewares);
};

module.exports = {
	createClient,
	composeMiddleware,
	composePlugins,
	// plugins,
	// middleware,
};
