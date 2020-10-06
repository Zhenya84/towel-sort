
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ((matrix == []) || (matrix == undefined)) return [];
    let arrSort = [];
    for (let j=0; j < matrix.length; j++) {
      if (j % 2 == 0) {
       for (let i=0; i < matrix[j].length; i++) {arrSort.push(matrix[j][i])}
      }
      else { for (let i = (matrix[j].length - 1); i >=0; i--) {arrSort.push(matrix[j][i])}}
    }
    return arrSort;
}
