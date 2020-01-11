var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ' Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        console.log('X:' + (this.x - another.x) + ' Y:' + (this.y - another.y));
    };
    return Point;
}());
var point2 = new Point(2, 2);
point2.draw();
point2.getDistance(new Point(3, 4));
/**
 * public: default
 * private: only to class
 * protected: accessible to childs
 */ 
