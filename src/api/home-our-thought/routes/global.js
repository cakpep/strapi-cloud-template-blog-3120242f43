'use strict';

/**
 * global router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-our-thought.home-our-thought');
