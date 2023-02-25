const os = require('os');
let res = os.platform();
console.log(res);

const my_math = require('./my_math');
let amount1 = my_math.add(4, 5);
let amount2 = my_math.minus(10, 5);
console.log(amount1);
console.log(amount2);

