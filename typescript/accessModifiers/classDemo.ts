class Point{
    private x: number;
    private y: number;

    constructor(x?:number, y?:number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X:' + this.x + ' Y:' + this.y);
    }

    getDistance(another: Point){
        console.log('X:' + (this.x - another.x) + ' Y:' + (this.y - another.y));
    }
}


let point2 = new Point(2,2);
point2.draw();

point2.getDistance(new Point(3,4));

/**
 * public: default
 * private: only to class
 * protected: accessible to childs
 */