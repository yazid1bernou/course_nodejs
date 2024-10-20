const express = require('express');
const app = express();

const port = 3000;

// http request methods :  get , post , put , patch , delete 

app.get('/', (req, res, next) => {
    res.redirect('/contact');
})

app.get('/about', (req, res, next) => {
    res.send("<h1> Welcome in About page  </h1>")
})
app.get('/contact', (req, res, next) => {
    res.send("<h1>  Welcome  in Contact page </h1>")
})


app.get('/user/:id', (req, res) => {
    res.send('use id is : ' + req.params.id);
})



app.listen(port, () => {
    console.log(`App is runing with port : ${port}`)
})


