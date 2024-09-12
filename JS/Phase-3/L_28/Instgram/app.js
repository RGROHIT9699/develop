function step1(filter) {
    console.log("plz waiting for selecting image");
    setTimeout(function () {
        console.log("image selected");
        filter("selected iamge");
    },5000);
}
function step2(image, caption){
    console.log("plz wait for finding filter...");
    setTimeout(function () {
        console.log(`filter applied on ${image}`);
        caption("Filter Added");
    },3000);
}
function step3(caption, final) {
    console.log("plzz wait adding caption...");
    setTimeout(function (){
        console.log(`caption added ${caption}`);
        final("IMAGE upload ed");
    },7000);
}
function step4(final) {
    console.log("plzz wait uploading image...");
    setTimeout(function (){
        console.log(`${final}`);
    },4000);
}
step1 (function (image){
    step2(image, function(filter) {
        step3(filter, function(final) {
            step4(final);
        });
    });
});