const add = function(x, y) {
	return x + y
};

const subtract = function(x,y ) {
	return x - y
};

const sum = function(arr) {
	// let sumEquate = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sumEquate += arr[i];
  // }

  // return sumEquate;

  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {

  return arr.reduce( (a, b) => a * b, 1)
};

const power = function(base, exponent) {

  return Math.pow(base, exponent)
	
};

const factorial = function(num) {


  let factorialProduct = 1
  // num = 5 
  // num * num - 1
  while (num > 0) {

    factorialProduct*= num

    num--
  }

  return factorialProduct
  
	
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
