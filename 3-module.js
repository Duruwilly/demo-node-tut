// CommonJS, node use commonjs(i really dont understand what it means but with time, i will), every file is module (by default)
// Modules - Encapsulated code (only share minimum)
// this basically talks about how it can be variable can be access in different modules and also every file is a module
const {peter, john} = require('./4-names')
const sayHi = require('./5-utilis')
const data = require('./6-alternative-module-export')
require('./7-mind-grenade')
// this basically means you dont need to assign it to a variable before you can require a function module


sayHi('susan')
sayHi(peter)
sayHi(john)