const  utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(22,33);
  if (res !== 55) {
    throw new Error(`Expected 55, but got ${res}`);
  }
})

it('should square number', () => {
  var res = utils.square(3);
  if (res !== 9) {
    throw new Error(`Expected 9, but not ${res}`);
  }
})