const add = function(...nums) {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
};

const subtract = function(num1, ...nums) {
	return nums.reduce((accumulator, currentValue) => accumulator - currentValue, num1)
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
};

const multiply = function(nums) {
  return nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
};

const power = function(num, power) {
  let originNum = num
  num = 1
  for (let i = 0; i < power; i++){
    num = num * originNum
  }
  return num
};

const factorial = function(num) {
  if (num === 0){
    return 1
  } else if (num -1 > 0){
    num *= factorial(num - 1)
  }
  return num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
