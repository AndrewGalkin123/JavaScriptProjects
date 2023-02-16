var reverse = function(x) {
    var result = '';
    
    while(x>0){
        result = result * 10 + x % 10;
        x = Math.floor(x / 10);
        if(result >=  2147483647){
            return 0;
        }
    }
    if(x<0){
      result = x.toString(10).split('').map(int => parseInt(int, 10));
      result.reverse().pop();
      for (let i = 0; i < result.length; i++) {
        if(result[i] == 0 && result[0] == 0){
         result.shift();
        }
   }
      result.unshift("-");
      result = result.join('');
      if(result <= -2147483648){
        return 0;
      }
    }
    return result;
};

console.log(reverse(-2147483648));