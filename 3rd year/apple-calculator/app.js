let but = document.querySelectorAll('button')

let inp = document.querySelector('input')

for(let item of but) {
    item.addEventListener('click',function (eve) {
        let val = eve.target.innerText;
        if(val === 'C') {
            inp.value =''           
        } 
        else if (val === '=') {
            try{
                inp.value = eval(inp.value);            
            }
            catch(err) {
                inp.value = 'Error';
            }
        }
        else {
            inp.value += val;
        }
    })
}