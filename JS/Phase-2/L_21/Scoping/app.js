let a=10;
function fun1(){
    let b=100;
    function fun2(){
        console.log(b);
        function fun3(){
            console.log(a);
        }
        fun3();
    }
    fun2();
}
fun1();