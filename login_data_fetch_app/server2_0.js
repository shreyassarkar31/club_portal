const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://31shreyassarkar13:qquZWE0wmpVZeWB2@cluster0.50wryra.mongodb.net/MusicPlayerUsers');

const loginSchema = {

    Username : String,
    password: String

}

const x = mongoose.model('logindatas', loginSchema);

app.get('/', function(req, res) {

    x.find({}, function(err, logindatas) {

        res.render('logindata', {
            loginData: logindatas
        })
    })
})


app.listen(5000, function() {
    console.log('server is running');
})