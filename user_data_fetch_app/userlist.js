const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://31shreyassarkar13:qquZWE0wmpVZeWB2@cluster0.50wryra.mongodb.net/MusicPlayerUsers');

const userSchema = {
    Username: String,
    password: String,
    Email: String
}

const sch = mongoose.model('notes', userSchema);

app.get('/', (req, res) => {
    sch.find({}, function(err, notes) {
        res.render('index', {
            usersList: notes
        })
    })
})

app.listen(4000, function() {
    console.log('server is running');
})