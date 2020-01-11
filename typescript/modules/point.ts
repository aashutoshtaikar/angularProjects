export class Point{
    get y(): number {
        return this._y;
    }
    
    set y(value: number) {
        if(value<0){
            throw new Error('value cannot be less than 0');
        }
        this._y = value;
    }
    
    get x(): number {
        return this._x;
    }
    
    set x(value: number) {
        if(value<0){
            throw new Error('value cannot be less than 0');
        }
        this._x = value;
    }

    constructor(private _x?: number, private _y?: number){
        this.x = _x;
        this.y = _y;
    }

    draw(){
        console.log('X:' + this.x + ' Y:' + this.y);
    }
}

