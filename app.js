'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')
const replyFrom = require('fastify-reply-from');
const pointOfView = require('point-of-view');
const handlebars = require('handlebars')

module.exports = async function (fastify, opts) {
  fastify.register(replyFrom)

  fastify.register(pointOfView, {
    root: path.join(__dirname, 'views'),
    engine: { handlebars },
    layout: 'layout.hbs',
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
