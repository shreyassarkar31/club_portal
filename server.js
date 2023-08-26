const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://31shreyassarkar13:qquZWE0wmpVZeWB2@cluster0.50wryra.mongodb.net/MusicPlayerUsers')


const notesSchema = {

    Name: String,
    password: String,
    Email: String
}

const Note = mongoose.model("Note", notesSchema);


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/SignupForm.html")
})


app.post("/", function(req, res) {

    let newNote = new Note({
        Name: req.body.Name,
        password: req.body.password,
        Email: req.body.Email
    })
    newNote.save();
    res.redirect('/login');
})

app.listen(3000, function() {
    console.log("server is running on 3000")
})

