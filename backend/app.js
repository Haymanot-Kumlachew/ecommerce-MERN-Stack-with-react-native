const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to API');
})

//Server
app.listen(3000, ()=>{

    console.log('server is running http://localhost:3000');
})