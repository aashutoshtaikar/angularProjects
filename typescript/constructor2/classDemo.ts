class Point{

    // no need to specify fields if they are in constructor
    // typescript generates them for you
    constructor(public x?:number,public y?:number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X:' + this.x + ' Y:' + this.y);
    }

    getDistance(another: Point){
        // ..
    }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

let point2 = new Point(2,2);
point2.draw();

// point.getDistance();

/**
 * public: default
 * private: only to class
 * protected: accessible to childs
 */