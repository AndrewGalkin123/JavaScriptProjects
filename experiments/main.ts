let isCompleted: Array<number> = [1, 2, 5, 1];

isCompleted = [1, 2, 7, 1];
console.log(isCompleted)

enum Directions {
    Up,
    Down,
    Right,
    Left
}

const createPassword = (name: string, age?: number | string) => `${name}${age}`




createPassword("Jack")
createPassword("Jack", "31")

type Person = {
    name: string,
    age: number,
    nickName?: string,
    getPass? : () => string
}

let user: Person = {
    name: "Yauhen",
    age: 30
}

class User { 
    constructor(public name: string, public age: number){}
}

class Human { 
    private nickName: string = "smth"
    static secret = 12345;
    constructor(public name: string, public age: number){}

    getPass(): string {
        return `${this.name}${Human.secret}`
    }
}

const andrew = new User("Andrew" ,31)

console.log(andrew)

class Andrew extends Human { 
    name: string = "Andrew"
}

abstract class Bird {
    constructor(public name: string, public age: number){}

    greet(): void {
        console.log(this.name)
    }

    abstract getPass(): string; // обязательно к реализации
}

class Pigeon extends Bird{
    name: string = "Pigeon"

    constructor(age: number){
        super(name, age)
    }

    getPass(): string { 
        return `${this.age}${this.name}`
    }
}

namespace Utils { 
    export const SECRET: string = "12412421";
    const PI: number = 3.14

    export const getPass = (name: string, age: number): string => `${name}${age}`

    export const isEmpty = <T>(data: T): boolean => !data;
}

interface Flyable { 
    readonly speed: number, // cant be changes
    fly(): void;
    [propName: string]: any // если хотим расширять obj 
}

const bird: Flyable = { 
    speed: 200,
    fly() { 
        console.log(`${this.speed}`)
    },
    number: 1
}

//generic

const getter1 = <T>(data: T): T => data; //es6

function getter2<T>(data: T): T {  // es5
    return data
}

getter1("test")

getter1<number>(10)

class User1<T, K extends number> { //generic class
    constructor(public name:T, public age:K){}

    public getPass(): string { 
        return `${this.name}${this.age}`
    }

    public getSecret() :number { 
        return this.age**2
    }
}

const slav = new User1("Lala", 31)
const yarik = new User1("123", 321)
const yarik1 = new User1(213, 321)
slav.getPass()



const logClass = (constructor: Function) => {
    console.log(constructor)
}



@logClass
class User3 { 
    constructor(public name: string, public age: number){}
     
    public getPass(): string { 
        return `${this.name}${this.age}`
    }
}