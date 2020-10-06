
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix.length !== 0) {
        let arrSort = [];
        for (let j=0; j < matrix.length; j++) {
         if (j % 2 == 0) {
            for (let i=0; i < matrix[0].length; i++) {arrSort.push(matrix[j][i])}
         }
         else { for (let i = (matrix[0].length - 1); i >=0; i--) {arrSort.push(matrix[j][i])}}
         }
        return arrSort;
    } else return [];
}
