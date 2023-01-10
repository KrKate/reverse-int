module.exports = function reverse(n) {
  n = Math.abs(n);
  let result = n.toString();
  return result.split('').reverse().join('');
  
}
