// function Sam(naam,umar,favRang){
//     this.name = naam;
//     this.age = umar;
//     this.favColor = favRang;
// }
// let p1 = new Sam("sam",90,"black");
// console.log(p1);


// p1.__proto__ === Sam.prototype


// // true
// ------------------------
// let obj = {
//     a:10,
//     b: function(){
//         console.log("sam");
//     }
// }
// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);
// obj.b();
// // console.log(obj.c);
// obj.c();

// -------------------------
// function Sam(naam,umar,favRang){
//     this.name = naam;
//     this.age = umar;
//     this.favColor = favRang;
// }
// Sam.prototype.fn = function(){
//     console.log("Kaju");
// };
// let p1 = new Sam("sam",90,"black");
// let p2 = new Sam("vohra",190,"blue");
// console.log(p1,p2);
// -------------------------------------------
// class Sam{
//     constructor(naam,umar,favRang){
//         this.name = naam;
//         this.age = umar;
//         this.favColor = favRang;
//     }
//     fn() {
//         console.log("kaju");
//     }
// }
// let p1 = new Sam("sam",90,"black");
// let p2 = new Sam("vohra",190,"blue");
// console.log(p1,p2);
// ------------------------------------------
class Person{
    constructor(naam,umar,email){
        this.name = naam;
        this.age = umar;
        this.email = email;
    }
    greeting(){
        return `good morning from ${this.name}`;
    }
    level() {
        console.log("laval sabke miklenge");
    }
}
class Student extends Person {
    constructor(naam,umar,email,batch){
        super(naam,umar,email);
        this.batch = batch;
    }
    level() {
        console.log("jo end tak rahega");
    }
}
let p1 = new Person("sam",90,"sam@gmail.com","super150");
console.log(p1);
p1.level();