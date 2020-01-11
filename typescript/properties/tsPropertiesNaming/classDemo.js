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
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0');
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "Y", {
        get: function () {
            return this.y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0');
            }
            this.y = value;
        },
        enumerable: true,
        configurable: true
    });
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
