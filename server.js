const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/images'));

mongoose.connect('mongodb+srv://31shreyassarkar13:qquZWE0wmpVZeWB2@cluster0.50wryra.mongodb.net/MusicPlayerUsers')


const notesSchema = {

    Username: String,
    password: String,
    Email: String
}

const loginSchema = {
    Username:String,
    password:String
}

const Note = mongoose.model("Note", notesSchema);
const logindata = mongoose.model("logindata", loginSchema);


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/SignupForm.html")
    

    
})

const list =[]

app.post("/", function(req, res) {

    let newNote = new Note({
        Username: req.body.Username,
        password: req.body.password,
        Email: req.body.Email
        
    })
    newNote.save();

    list[0] = req.body.Username
    list[1] = req.body.password

    res.redirect('/login')
    
})

app.get('/login', function(req, res) {

    res.sendFile(__dirname + '/login.html')

})


app.get('/login/main', function(req, res) {

    res.sendFile(__dirname + '/main.html')
})

app.post('/login/main',function(req, res) {

    let newLogin = new logindata({
        Username:req.body.Username,
        password:req.body.password
    })
    newLogin.save();
    const a = req.body.Username
    const b = req.body.password 

    if (a==list[0] && b==list[1]) {
        res.redirect('/login/main')

    }
    else {
        res.redirect('/')
        
    }

    
    
    
})






app.listen(3000, function() {
    console.log("server is running on 3000")
})

