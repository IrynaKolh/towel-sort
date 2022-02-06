module.exports = function towelSort(matrix) {
    let row = [];
    if (!matrix || typeof(matrix) == undefined) {
        return row = [];
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIndex = i % 2 === 0 ? j : (matrix[i].length - 1 - j);
            row.push(matrix[i][columnIndex]);
        }
    }
    return row;
}