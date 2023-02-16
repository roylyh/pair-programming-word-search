const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) array.push([]);
      array[j][i] = matrix[i][j];
    }
  }
  return array;
};


module.exports = wordSearch;