const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//Static folder for all assets
app.use(express.static('dist'));
//Set view engine
//app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// app.get('*', function (req, res) {
//     res.status(404).render('404.pug');
// });

app.listen(3000, function () {
    console.log("Listening at port 3000");
});