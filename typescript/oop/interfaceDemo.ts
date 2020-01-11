let drawPoint = (x, y, a, b) => {
    //...
}

//solution1 inline annotation

let drawPointInline = (point: {x: number, y: number}) =>{
    //...
}


//solution 2 interface
interface Point{
    x: number,
    y: number
    draw: () => void
}

// Cohesion : things that are related should be a part of one unit

class PointImpl implements Point{
    x: number;    
    y: number;
    
    draw(){
        console.log('drawing...');   
    }

    // // //OR
    // draw: () =>{
    //     console.log('drawing...');
    // }

}
