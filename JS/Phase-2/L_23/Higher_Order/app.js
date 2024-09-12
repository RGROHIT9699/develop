
// >>Higher Order sit. 1
// function fun1(fu){
//     console.log('Fun1');
//     fu;
// If fun2 is not call in fun1 then it is not callback
// }
// function fun2(){
//     console.log('Fun2');
// }
// fun1(fun2);
// ----------------------------------------------
function fun1(){
    console.log("Inside");
    function fun2(){
        console.log("Inside 2");
    }
    return fun2;
}
fun1;
