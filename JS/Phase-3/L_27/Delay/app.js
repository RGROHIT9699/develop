// console.log("start");

// console.log("after 4 second");

// console.log("end");
// ------------------------------------------------------------
// console.log("start");

// setTimeout(function(){
//     console.log("after 4 second");
// },4*1000);

// console.log("end");
// -------------------------------------------------------------
// console.log("start");

// setTimeout(function(){
//     console.log("after 4 second");
// },4*1000);
// setTimeout(function(){
//     console.log("after 3 second");
// },3*1000);

// console.log("end");
// ---------------------------------------------------------------
console.log("start");

setTimeout(function(){
    console.log("after 4 second");
},4*1000);
setTimeout(function(){
    console.log("after 3 second");
},3*1000);
setTimeout(function(){
    console.log("after 0 second");
},0);

console.log("end");