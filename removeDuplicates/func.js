var duplicateZeros = function(arr) {
    const n = arr.length;
    let i = 0;
    
    while (i < n) {
        if (arr[i] === 0) {
            for (let j = n - 1; j > i; j--) {
                arr[j] = arr[j - 1]; // Сдвигаем элементы вправо
            }
            i += 2; // Перескакиваем через вставленный ноль и следующий элемент
        } else {
            i++;
        }
    }
    
    return arr;
};


console.log(duplicateZeros([1,0,2,3,0,4,5,0]))