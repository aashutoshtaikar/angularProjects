var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ' Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ..
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
var point2 = new Point(2, 2);
point2.draw();
// point.getDistance();
