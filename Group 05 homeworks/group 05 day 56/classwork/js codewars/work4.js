function fakeBin(x){
    result = ""
    if (x < 5){
      result = "0"
    }
    if (x >= 5){
      result = "1"
    }
    return result
  }
/**
 * Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string
 */