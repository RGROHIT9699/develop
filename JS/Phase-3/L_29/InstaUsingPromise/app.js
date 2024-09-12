let step1 = function() {
    return new Promise((resolve,reject) =>{
        console.log("Please wait image is selecting...");
        setTimeout(function (){
            resolve("image selected");
        },4000);
    });
};
let step2 = function(image) {
    return new Promise((resolve,reject) =>{
        console.log(`filter is applying on ${image}..`);
        setTimeout(function (){
            resolve("filter selected");
        },3000);
    });
};
let step3 = function(filter) {
    return new Promise((resolve,reject) =>{
        console.log(`caption is applying on ${filter}..`);
        setTimeout(function (){
            resolve("caption applied");
        },5000);
    });
};
let step4 = function(caption) {
    return new Promise((resolve,reject) =>{
        console.log(`uploading image ${caption}..`);
        setTimeout(function (){
            resolve("image uploaded");
        },7000);
    });
};
step1().then(function (img) {
    console.log(img);
    return step2();
}).then(function (filter){
    console.log(filter);
    return step3();
}).then(function (caption){
    console.log(caption);
    return step4();
}).then(function(upload){
    console.log(upload);
});
