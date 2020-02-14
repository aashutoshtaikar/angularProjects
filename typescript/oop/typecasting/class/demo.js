var example = {
    "name": "Mark",
    "surname": "Galea",
    "age": 30,
    "address": {
        "firstLine": "Some where",
        "secondLine": "Over Here",
        "city": "In This City"
    }
};
var Address = /** @class */ (function () {
    function Address(firstLine, secondLine, city) {
        this.firstLine = firstLine;
        this.secondLine = secondLine;
        this.city = city;
    }
    return Address;
}());
var Person = /** @class */ (function () {
    function Person(name, surname, age, address) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.address = address;
    }
    return Person;
}());
var tom = example;
// console.log(tom);
var bom = tom;
console.log(bom);
