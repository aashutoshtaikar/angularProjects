// type assertions
let message;
message = 'abc';
// typescript gets confused as the message is not initialized with a string
let endsWithC = message.endsWith('c');

let endsWithCother = (<string>message).endsWith('c');


let log = function(message){
    console.log(message);
}

let doLog = (message) => console.log(message);