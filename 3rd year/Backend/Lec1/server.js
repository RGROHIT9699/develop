const express = require('express');
const app = express()
const path = require('path');

app.get('/',(req,res) => {
    res.send("Hello World");
})  

app.get('/rohit',(req,res) => {
    res.render('index');
})  

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views')); // views folder 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});