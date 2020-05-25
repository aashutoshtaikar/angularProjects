const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false; // introduce error by setting to true

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        },2000);
    });
};

// promise demo
// createPost({title: 'post three', body: 'this is post three'})
//     .then(getPosts)
//     .catch(err=>console.log(err));

/////////////////////////
// Promises.all examples
/////////////////////////
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 2000, 'Promise 3 resolved, goodbye');
// })
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res=>res.json());

// //// promise all demo
// //// takes however long the longest promise is to be resolved
// Promise.all([promise1, promise2, promise3, promise4]).then((values)=>console.log(values));

/////////////////
// Async / Await
/////////////////
// async function init(){
//     await createPost({title: 'post three', body: 'this is post three'});
//     getPosts();
// }

// init();




////////////////////////
// Async / Await / Fetch
////////////////////////
async function init(){
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

init();