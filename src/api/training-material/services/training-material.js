'use strict';

/**
 * training-material service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::training-material.training-material');
