let isCompleted: Array<any> = [1, 2, 5, 1];

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