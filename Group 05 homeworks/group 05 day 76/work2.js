function descendingOrder(n){
    const str_n = String(n);
    const numbers = [];
    
    for(let i = 0; i < str_n.length; i++){
      numbers.push(Number(str_n[i]))
    }
    
    numbers.sort(function(a, b) {return b - a})
    
    let result = '';
    
    for(let i = 0; i < numbers.length; i++){
      result += String(numbers[i]);
    }
    
    return Number(result)
    
  }