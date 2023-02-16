const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  const transHorizontalBackJoin = transHorizontalBack(letters);
  for (let l of transHorizontalBackJoin) {
    if (l.includes(word)) return true;
  }
  const transVerticalBackJoin = transVerticalBack(letters);
  for (let l of transVerticalBackJoin) {
    if (l.includes(word)) return true;
  }
  const transDiagonalJoin = transDiagonal(letters);
  for (let l of transVerticalBackJoin) {
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

const transHorizontalBack = function(matrix) {
  return matrix.map(ls=>ls.reverse().join(""));
};

const transVerticalBack = function(matrix) {
  return transHorizontalBack(transpose(matrix));
};

const transDiagonal = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let array = [];
  for (let col = 0; col < cols; col++) {
    let j = col;
    let i = 0;
    let str = "";
    while (i >= 0 && j >= 0 && i < rows && j < cols) {
      str += matrix[i++][j++];
    }
    array.push(str);
  }
  for (let row = 1; row < rows; row++) {
    let i = row;
    let j = 0;
    let str = "";
    while (i >= 0 && j >= 0 && i < rows && j < cols) {
      str += matrix[i++][j++];
    }
    array.push(str);
  }
  for (let col = 0; col < cols; col++) {
    let j = col;
    let i = 0;
    let str = "";
    while (i >= 0 && j >= 0 && i < rows && j < cols) {
      str += matrix[i++][j--];
    }
    array.push(str);
  }
  for (let row = 1; row < rows; row++) {
    let i = row;
    let j = cols - 1;
    let str = "";
    while (i >= 0 && j >= 0 && i < rows && j < cols) {
      str += matrix[i++][j--];
    }
    array.push(str);
  }
  return array;
};

const result = transDiagonal([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
]);

console.log(result);

module.exports = wordSearch;