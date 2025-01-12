function matrixSum(matrix) {
    let sum = 0;
    for (let row of matrix) {
      for (let val of row) {
        sum += val;
      }
    }
    return sum;
  }
  
  // Example
  const matrix = [[1, 3], [1, 4], [4, 1], [2, 2]];
  console.log(matrixSum(matrix));  // Output: 18