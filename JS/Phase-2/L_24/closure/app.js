// function outer(){
    //     let a = 100;
//     function inner(){
    //         console.log(a);
    //     }                                                         
    //     inner();
    // }
    // outer();
    // -----------------------------
    
    // function outer(){
        //     let a = 100;
        //     function inner(){
            //         console.log(a);
            //     }
            //     return inner();
            // }
            // outer();
            // ----------------------------------
            
            function counter(){
                let coun =1;
                return {
                    getCount : function(){
                        console.log(coun)
                    },
                    increament: function(){
                        coun++;
                    },
                    decreament: function(){
                        coun--;
                    },
                    reset : function(){
                        coun=0
                    }
                }
            }
            let count1 = counter();
            count1.getCount();
count1.increament();
count1.getCount();
count1.decreament();
count1.getCount();
count1.reset();
count1.getCount();

console.log(coun);