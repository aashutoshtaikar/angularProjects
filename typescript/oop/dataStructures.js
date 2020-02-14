var Car = /** @class */ (function () {
    function Car(id, name) {
        this.id = id;
        this.name = name;
    }
    return Car;
}());
var Engine = /** @class */ (function () {
    function Engine(id, name) {
        this.id = id;
        this.name = name;
    }
    return Engine;
}());
var animals = new Array();
animals.push("cheetah");
animals.push("giraffe");
animals.push("tiger");
for (var index = 0; index < animals.length; index++) {
    animals[index] += " appended";
}
console.log(animals);
console.log("length: " + animals.length);
animals.forEach(function (element, index) {
    if (element === "giraffe appended") {
        animals.splice(index, 1);
    }
});
console.log(animals);
// let scores: Array<number> = [10, 20, 30, 40];
// scores.push(50);  //[10, 20, 30, 40, 50]
// console.log(scores);
// let carArr: Car[] = new Array();
// carArr.push(new Car(1, "toyota camry"));
// carArr.push(new Car(2, "hyndai elantra"));
// console.log(carArr);
var someValue = "this is a string";
var strLength = someValue.length;
var strLengthForJsx = someValue.length;
console.log(strLength + " " + strLengthForJsx);
