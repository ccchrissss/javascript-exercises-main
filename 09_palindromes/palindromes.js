const palindromes = function (str) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const digits = '0123456789'.split('')
  // const alphabetCaps = 'ABCDEFHIJKLMNOPQRSTUVWXYZ'.split('')
  // str = str.toLowerCase().split('').filter( e => alphabet.includes(e) || alphabetCaps.includes(e) ).join('')
  str = str.toLowerCase().split('').filter( e => alphabet.includes(e) || digits.includes(e) ).join('')
 
  let strRev = str.split('')
  strRev = strRev.reverse().join('')

  
  // console.log('strRev: ', strRev)
  // console.log('str: ', str)


  return str === strRev ? true : false
};

// console.log(palindromes('abcdef'))
// console.log(palindromes('rac3e3car'))
// console.log(palindromes('r3ace3car'))

// Do not edit below this line
module.exports = palindromes;
