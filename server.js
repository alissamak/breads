//Configuration of dotenv, express and .env
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
// console.log(PORT);

//middleware
//jsx middleware
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// show request middleware
app.use(express.static('public'));
//post request middleware
app.use(express.urlencoded({extended: true}));

//route
app.get('/', (req, res) => {
    res.send('Welcome to an awesome app about Breads!')
})

//breads
const breadController = require('./controllers/breads_controller.js')
app.use('/breads', breadController)

//404 page
app.get('*', (req, res) => {
        res.send('404')
})

//listen for port number
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
});

