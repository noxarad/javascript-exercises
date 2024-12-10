const add = function(...nums) {
  let sum = 0
    for (let num of nums){
      sum += num
    }
  return sum
};

const subtract = function(num1,...nums) {
  let sum = num1
    for (let num of nums){
      sum -= num
    }
  return sum
};

const sum = function(nums) {
  let sum = 0
  for (let i = 0; i <= nums.length - 1; i++){
   sum += nums[i]
    }

  return sum
};

const multiply = function(nums) {
  let sum = 1
  for (let i = 0; i <= nums.length - 1; i++){
   sum *= nums[i]
    }

  return sum
};

const power = function(num, power) {
  let sum = 1
      for (let i = 0; i <= power - 1; i++){
        sum *= num
      }
  return sum
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
