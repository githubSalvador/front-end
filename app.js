'use strict'
const color = require('chalk')
const debug = require('debug')('front-end:demo')
let msg = 'Hola mundo'
    // console.log(`El mensaje es: ${color.yellow(msg)}`)

debug(`El mensaje es: ${color.yellow(msg)}`)