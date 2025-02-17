class MathHelper {
    static PI = 3.14159265359;
  
    static power(base, exponent) {
      let result = 1;
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }
      return result;
    }
  }
  
  class RandomHelper {
    static CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
    static randomChar() {
      const index = Math.floor(Math.random() * this.CHAR_SET.length);
      return this.CHAR_SET[index];
    }
  }
  
  class TimeHelper {
    static CREATION_TIME = Date.now();
  
    static msToReadable(ms) {
      const date = new Date(ms);
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }
  }
  
  console.log(MathHelper.PI);
  console.log(MathHelper.power(2, 3));
  console.log(RandomHelper.randomChar());
  console.log(TimeHelper.msToReadable(Date.now()));
  