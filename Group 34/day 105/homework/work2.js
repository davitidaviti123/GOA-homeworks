function transposeMatrix(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let row = [];
      for (let j = 0; j < matrix.length; j++) {
        row.push(matrix[j][i]);
      }
      result.push(row);
    }
    return result;
  }
  
  // Example
  const matrix = [[1, 2], [3, 4], [5, 6]];
  console.log(transposeMatrix(matrix));  // Output: [[1, 3, 5], [2, 4, 6]]
  