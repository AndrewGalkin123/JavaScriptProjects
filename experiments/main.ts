let isCompleted: Array<any> = [1,2,5,1];

isCompleted = [1,2,7,1];
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
