arr = [1,2,5,7,1 ]
arr = [...arr,10]


console.log(arr)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.filter((word) => word.length > 7))

array = [2,6,8,1,2 ]

array = array.map((el) => el**2)

console.log(array)

array2 = [8,2,6,1,6 ]

array2.forEach(element => {
    element *2
});

console.log(array2)

// map() возвращает совершенно новый массив с преобразованными элементами 
// и тем же количеством данных. В случае forEach(), даже если он вернется undefined, 
// он изменит исходный массив с помощью callback.

// из за того что forEach возвращает undef к немуу нельзя дополнительно применять другие методы ,к map можно