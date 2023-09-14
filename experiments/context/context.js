function hello() {
    console.log("Hello ", this)
}

const person = {
    name: 'Vladimir',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function (job, phone) {
        console.group(`${this.name} info: `)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: "Elena",
    age: 23
}

person.logInfo.bind(lena, "Frontend developer", "492194219")() // возвращает функцию

person.logInfo.call(lena, "Frontend developer", "492194219") // сразу вызывает

person.logInfo.apply(lena, ["Frontend developer", "492194219"]) // отличается способом передачи параметров

///

const arr = [1, 2, 3, 4, 5]

// function multBy(num, arr) {
//     return arr.map((el) =>  el * num)
// }

// console.log(multBy(5, arr))

Array.prototype.multBy = function(n) {
    return this.map((el) =>  el * n)
}


console.log(arr.multBy(20))
///
// this - показывает то к кому мы вызываем метод

