
function createIncrement() { 
    let count = 0
    function increment() {
        count++
    }
    let message = 'Count is ' + count
    function log() { 
        console.log(message)
    }
    return [increment , log]
}
const [increment, log] = createIncrement()
increment()
increment()
increment()
log()

// global  {
//     link : null
//     variables: {
//         createIncrement
//         counter1 : function
//         counter2 : function name(params) {
            
//         }
//     }
// }

// createIncrement: {
//     link : global
//     count : 3
//     increment: function
//     message: "Count is 0"
//     log: function

// }

// log { 
//     link = createIncrement
//     variables: нету
// }
// поєтому message count = 0 ; мы не переписываем
// замыкание это поиск актуальных значений в коде
// чтобы сделать все правильно и показывало актуальное значение нужно  let message = 'Count is ' + count переместить в log()

const person = {
    fullname:  function() {
        return this.firstname + " " + this.lastname
    }
}

const person1 = { 
    firstname: "John",
    lastname: "Doe"
}

const person2 = { 
    firstname: "John2",
    lastname: "Doe2"
}

console.log(person.fullname.call(person1))
console.log(person.fullname.call(person2))


