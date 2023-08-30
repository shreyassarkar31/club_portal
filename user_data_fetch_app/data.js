const express = require('express');
const mongoose = require('mongoose');
const app = express();
const {Schema} = mongoose;
app.use(express.json());
//const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

//app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://31shreyassarkar13:qquZWE0wmpVZeWB2@cluster0.50wryra.mongodb.net/MusicPlayerUsers',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const sch = new Schema({
    Name: String,
    password: String,
    Email: String
}, {versionKey:false})

const monmodel = mongoose.model('notes', sch);

app.post('/post', async(req, res) => {
    console.log("inside post function");

        const data = new monmodel ({
            Name:req.body.Name,
            password:req.body.password,
            Email:req.body.Email
        });
        const val = data.save();
        res.send("posted")
});



app.get('/fetch', (req, res) => {
    
    monmodel.find((err,val) => {
        if(err) 
        {
            console.log(err)
        } else {
            res.json(val)
        }
    })
})

app.listen(4000, function() {
    console.log('server is running');
})