const _ = require('lodash');

const numbers = [33, 46, 75, 44, 32, 3];

_.each(numbers, (number, index) => {
     console.log(number);
})