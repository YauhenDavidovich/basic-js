module.exports = function countCats(matrix) {
  let countC = 0
  let cat = new RegExp("^\\^\\^$");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (((typeof matrix[i][j]) === 'string') && (matrix[i][j].match(cat))) {
        countC++
      }
    }
  }
  return countC
};