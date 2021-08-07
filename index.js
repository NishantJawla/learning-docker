const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("HI there from node!");
})


app.listen(8000,()=>{
    console.log('Application is running at port 8000 ')
})