//express defining
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//mongo DB connection
mongoose.connect("mongodb://localhost:27017/restapi_data", {
  useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
});

const Coordinates = require('./coordinats_schema');


const port = 3500;
//routes defining 
app.get('/hello', (req, res) => {
    res.send("Hello World !!!");
});
//routes2
app.get('/getcord', (req, res) => {
   // const id = '621cca8f64bb5f41cf86c739';//example for requesting unique id 
   const id = req.query.id;
    const result = Coordinates.findById(id, (err, coord) => {
        if (err) {
            console.log("error");
        }
        if (coord) {
            console.log('coordinates found ', coord);
            res.send(coord)
        }
    });
  //  res.send("coordinatess")
});

app.listen(port, () => {
    console.log('Server Started ');
})


