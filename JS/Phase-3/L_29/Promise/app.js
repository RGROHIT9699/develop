let p = new Promise(function(resolve,reject){
    let data = "yu hai maharo resolve";
    let error = "yu to error de go";
    
    resolve(data);
    reject(error);
    // console.log("meri line");
    // console.log("kuch toh hai");
})
// p.then().catch()

// p.then(function (d){
//     console.log(d);
// })
// p.then(function (d){
//     console.log(d);
// }).catch(function (e) {
//     console.log(e);
// })
p.catch(function (e) {
    console.log(e);
}).then(function (d){
    console.log(d);
})