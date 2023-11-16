arr = [1, 2, 5, 7, 1]
arr = [...arr, 10]


console.log(arr)

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(words.filter((word) => word.length > 7))

array = [2, 6, 8, 1, 2]

array = array.map((el) => el ** 2)

console.log(array)

array2 = [8, 2, 6, 1, 6]

array2.forEach(element => {
    element * 2
});

console.log(array2)

// map() возвращает совершенно новый массив с преобразованными элементами 
// и тем же количеством данных. В случае forEach(), даже если он вернется undefined, 
// он изменит исходный массив с помощью callback.

// из за того что forEach возвращает undef к немуу нельзя дополнительно применять другие методы ,к map можно

array3 = [1, 25, 67, 71, 7]

const func = () => {
    console.log("Hello")
}

array3.forEach(func)

let map = new Map()

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

map.set("1", "str1");    // строка в качестве ключа
map.set(1, "num1");      // цифра как ключ
map.set(true, "bool1");  // булево значение как ключ

console.log(map.get(true))
console.log(map.size)
// Использование объектов в качестве ключей – одна из наиболее заметных и важных функций Map. Это то что невозможно для Object. 
// Строка в качестве ключа в Object – это нормально, но мы не можем использовать другой Object в качестве ключа в Object.

let recipeMap = new Map([
    ["огурец", 500],
    ["помидор", 350],
    ["лук", 50]
]);

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
}

for (let cost of recipeMap.values()) {
    console.log(cost); // огурец, помидор, лук
}

for (let entry of recipeMap) {
    console.log(entry)
}

recipeMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); // огурец: 500 и так далее
});

// Если у нас уже есть обычный объект, и мы хотели бы создать Map из него, то поможет встроенный метод Object.entries(obj), 
// который получает объект и возвращает массив пар ключ-значение для него, как раз в этом формате.

let obj = {
    name: "John",
    age: 30
};

let map1 = new Map(Object.entries(obj));

console.log(map1.get('name'));

// Мы только что видели, как создать Map из обычного объекта при помощи Object.entries(obj).
// Есть метод Object.fromEntries, который делает противоположное: получив массив пар вида [ключ, значение], он создаёт из них объект:

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange); // 2

let map3 = new Map();
map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);

let obj1 = Object.fromEntries(map3.entries()); // создаём обычный объект (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj1.orange); // 2

// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), 
// то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

// Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же значением ничего не происходит, 
// за счёт этого как раз и получается, что каждое значение появляется один раз.

// Например, мы ожидаем посетителей, и нам необходимо составить их список. Но повторные визиты не должны приводить к дубликатам. 
// Каждый посетитель должен появиться в списке только один раз.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
}

for (let value of set) console.log(value);

function unique(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++)
        if (!array.includes(arr[i]))
            array.push(arr[i])
    return array
}

function unique2(arr) {
    let set = new Set()
    for (let i = 0; i < arr.length; i++)
        set.add(arr[i])
    return set
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))

console.log(unique2(values))

let arr23 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

const aclean = (arr) => {
    let map = new Map();

    for (let word of arr) {
        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

console.log(aclean(arr23))

console.log("////////////////////////////////////////////////")

let students = ['Jack', 'James', 'Robert', 'John'];
console.log(students);
students.splice(2,1, "Kakar");
console.log(students);
console.log(students.slice(1,3))


let str = "lorem ipsum is simply dummy text of the printing and typesetting industry"
let newStr = str.replace("is", "are")
console.log(newStr);

let splitStr = "JavaScript, is, nice"
let splitNewStr = splitStr.split(",")
console.log(splitNewStr[0]);