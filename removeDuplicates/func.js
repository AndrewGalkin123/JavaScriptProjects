var moveZeroes = function(nums) {
    
    nums.sort(function(a, b) {
        if (a === 0 && b !== 0) {
          return 1; // Перемещаем нули в конец
        } else if (a !== 0 && b === 0) {
          return -1; // Остальные числа идут перед нулями
        } else {
          return 0; // Сохраняем порядок для равных чисел
        }
      });
      return nums;
};

console.log(moveZeroes([0,1,0,3,12]))