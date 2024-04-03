const convertToCelsius = function(num) {
  let convertedNum = (((num - 32) * 5) / 9);

  return +convertedNum.toFixed(1)
};

const convertToFahrenheit = function(num) {
  let convertedNum = ((num * 9/5) + 32)

  return +convertedNum.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
