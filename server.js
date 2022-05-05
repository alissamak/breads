//Configuration of dotenv, express and .env
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
// console.log(PORT);

//route
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about Breads!')
})

//breads
const breadController = require('./controllers/breads_controller.js')
app.use('/breads', breadController)

app.listen(PORT, () => {
    console.log('nomming at port', PORT);
});