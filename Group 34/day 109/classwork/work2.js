function calculate(func, ...args) {
    return func(...args);
  }
  
  function add(...args) {
    return args.reduce((sum, num) => sum + num, 0);
  }
  
  function minus(...args) {
    return args.reduce((result, num) => result - num);
  }
  
  function multiply(...args) {
    return args.reduce((product, num) => product * num, 1);
  }
  
  console.log(calculate(add, 1, 7, 2, 1));
  console.log(calculate(minus, 10, 3, 2));
  console.log(calculate(multiply, 2, 3, 4));