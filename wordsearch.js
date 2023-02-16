const {transpose, transHorizontalBack, transVerticalBack, transDiagonal} = require("./transMatrix");

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
  for (let l of transDiagonalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;