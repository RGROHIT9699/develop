// // for-in
let obj = {
    naam: "Kaaju",
    age : 1,
    papa : "Somebody"
}

for(let i in obj){
    console.log(i);
    // wrong way
    console.log(obj.i);
    // right way
    console.log(obj[i]);
}
console.log(obj.naam);
// wrong way
console.log(obj[naam]);
// right way
console.log(obj["naam"]);

// -----------------------------------------------------------------------------------------------------

// for-of()
let array = [1,2,3,4,5,6,7];

for(let i of array){
    console.log(i);
}
