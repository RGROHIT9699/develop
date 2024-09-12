// 1. Object/Method Calling -> depends upon object
// let obj = {
//     a:10,
//     b:200,
//     fn: function() {
//         console.log(this);
//     },
// };
// obj.fn();

// -----------------------------------------------------

// 2. Direct Calling -> depend upon window
// function sam() {
//     console.log(this);
// }
// sam();

// -------------------------------------------------------
// eg: 
// let obj2 ={
//     a: "sam",
//     fn: function () {
//         console.log(this);
//     },
// };
// let ans= obj2.fn;
// ans();
// ----------------------------------------
// console.log(this);

// -----------------------------------------

// let obj3 = {
//     a:10,
//     fn: function () {
//         function sam () {
//             console.log(this);
//         }
//         sam();
//     },
// };
// obj3.fn();
// --------------------------------------------

// let obj3 = {
//     a: 10,
//     fn : function () {
//         function sam() {
//             console.log(this);
//         }
//         let a = sam;
//         return a;
//     },
// };
// let out = obj3.fn();
// out();
// ------------------------------------------------------
// let obj3 = {
//     a: 10,
//     fn : function () {
//         function sam() {
//             console.log(this);
//         }
//         let a = sam();
//         return a;
//     },
// };
// obj3.fn();
// -----------------------------------------------------
// 3. in case of constructor calling "this " always used to point newly created object
// function Sam () {
//     this.name = "sam";
// }
// let obj1 = new Sam();
// console.log(obj1);
// ------------------------------------------------------------------

// 4. class calling

// ------------------------------------------------------------------

// 5. Arrow Function : in case of arrow function this returs its parents this
// let obj= {
//     a:10,
//     fn: () =>{
//         console.log(this);
//     },
// };
// obj.fn();
// ---------------------------------------------------------------------
let obj2= {
    a:10,
    fn:function () {
        console.log(this);
        let sam = () => {
            console.log(this);
        };
        sam();
    },
};
obj2.fn();