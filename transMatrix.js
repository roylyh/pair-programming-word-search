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

module.exports = {transpose, transHorizontalBack, transVerticalBack, transDiagonal};