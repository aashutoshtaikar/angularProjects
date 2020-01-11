var num = 1;
let count = 2;

function doSomething(){
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething();

function doSomethingLet(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomethingLet();