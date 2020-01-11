var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ' Y:' + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    };
    Point.prototype.setY = function (value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0');
        }
        this.y = value;
    };
    return Point;
}());
var point2 = new Point(2, 2);
point2.draw();
// point.getDistance();
/**
 * public: default
 * private: only to class
 * protected: accessible to childs
 */ 
