function diagonalSum(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
      primaryDiagonal += matrix[i][i];
      secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }
    return [primaryDiagonal, secondaryDiagonal];
  }
  
  // Example
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(diagonalSum(matrix));  // Output: [15, 15]  