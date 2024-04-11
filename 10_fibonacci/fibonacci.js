const fibonacci = function(desiredSeqNum) {

  if (desiredSeqNum < 0) return 'OOPS'

  let fibArr = [0, 1]

  for (let i = 1; i < desiredSeqNum; i++) {
    
    fibArr.push( fibArr[i] + fibArr[i - 1] )
    
  }

  return fibArr[desiredSeqNum]

};

// Do not edit below this line
module.exports = fibonacci;
