#!/usr/bin/env node

'use strict'

const path = require('path')

function setup() {
  const setupMocks = require(path.resolve(
    __dirname,
    '../dist/src/scripts/setup-mocks'
  )).default
  setupMocks()
}

module.exports = setup
