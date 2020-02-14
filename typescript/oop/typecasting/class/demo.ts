let example: Object = {
    "name": "Mark",
    "surname": "Galea",
    "age": 30,
    "address": {
        "firstLine": "Some where",
        "secondLine": "Over Here",
        "city": "In This City"
    }
};

class Address {
    constructor(
        public firstLine: string,
        public secondLine: string,
        public city: string
    ) { }
}

class Person {
    constructor(
        public name: string,
        public surname: string,
        public age: number,
        public address: Address
    ) { }
}

let tom: Person = <Person>example;
// console.log(tom);
let bom: Person = tom;
console.log(bom);
