class Point{

    constructor(private x?:number, private y?:number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X:' + this.x + ' Y:' + this.y);
    }

    get X(){
        return this.x;
    }

    get Y(){
        return this.y;
    }

    set X(value){
        if(value<0){
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    }

    set Y(value){
        if(value<0){
            throw new Error('value cannot be less than 0');
        }
        this.y = value;
    }
}

let point2 = new Point(2,2);
point2.draw();

// point.getDistance();

/**
 * public: default
 * private: only to class
 * protected: accessible to childs
 */