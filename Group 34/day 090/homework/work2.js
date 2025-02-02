function filterNumbers(arr, int) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > int) {
      result.push(arr[i]);
    }
  }
  return result;
}