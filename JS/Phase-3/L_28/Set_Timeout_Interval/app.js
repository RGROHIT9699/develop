setTimeout(function(){
    console.log("Hii Bhai")
},2000)
let id= setInterval(function(){
    console.log("gian hai aap")
},5000)
setTimeout(function (){
    clearInterval(id);
},10000)