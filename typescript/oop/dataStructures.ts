// custom classes
class Car {
    constructor(
        public id: number,
        public name: string
    ) { }
}
class Engine {
    constructor(
        public id: number,
        public name: string
    ) { }
}

let animals: Array<string> = new Array();
animals.push("cheetah");
animals.push("giraffe");
animals.push("tiger")
for (let index = 0; index < animals.length; index++) {
    animals[index] += " appended";
}
console.log(animals);
console.log( "length: " + animals.length);

animals.forEach((element, index) => {
    if(element==="giraffe appended") {
        animals.splice(index,1);
    }
});
console.log(animals);

let scores: Array<number> = [10, 20, 30, 40];
scores.push(50);  //[10, 20, 30, 40, 50]
console.log(scores);

let carArr: Car[] = new Array();
carArr.push(new Car(1, "toyota camry"));
carArr.push(new Car(2, "hyndai elantra"));
console.log(carArr);

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let strLengthForJsx: number = (someValue as string).length;
console.log(strLength + " " + strLengthForJsx);

