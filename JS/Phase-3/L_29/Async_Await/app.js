// let p1 = new function() {

// }
// console.log(p1);
// return empty object

// function some() {

// }
// console.log(some());
// return undefined

async function some() {
    await new Promise((resolve,reject)=>{
        setTimeout( ()=>{
            console.log('3 sec')
            resolve()
        },3000)
    })
    await new Promise ((resolve,reject) =>{
        setTimeout( ()=>{
            console.log('2 sec')
            resolve()
        },2000)
    })
    console.log('done done');
}
some();
// console.log(some());