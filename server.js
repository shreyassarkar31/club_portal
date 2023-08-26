const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://31shreyassarkar13:qquZWE0wmpVZeWB2@cluster0.50wryra.mongodb.net/MusicPlayerUsers')


const notesSchema = {

    Firstname: String,
    Lastname: String
}

const Note = mongoose.model("Note", notesSchema);


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/LoginForm.html")
})


app.post("/", function(req, res) {

    let newNote = new Note({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname
    })
    newNote.save();
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("server is running on 3000")
})

