const temp = null
// console.log(typeof temp);

let lowesttemp;
// console.log(typeof lowesttemp);

const id = Symbol('123')
const id2 = Symbol(123)

// console.log(typeof id);
// console.log(typeof id2);

const heros = ["hanuman","Shaktiman","Krish"]
// console.log(typeof heros);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory(Primitive Type Data),Heap Memory(Non-Primitive Type Data)

let sname = "Akash"

let sname2 = sname
sname2 = "Jaydev"

// console.log(sname);
// console.log(sname2);

// in stack memeory it will work in call by value principal

// in heap memory it will work in call by reference principal

let user1 = {
    email:"Akash@gmail.com",
    uname:"Akash",
    uage:22
} 

let user2 = user1

user2.uname= "Jaydev"

console.log(user1);
console.log(user2);