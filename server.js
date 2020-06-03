const express= require("express")
const fs = require("fs")
const app= express()

const PORT = process.env.PORT || 4000
//Express use
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//ROUTES

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Develop/public/index.html");
  });

app.get("/notes", function(req, res) {
    res.sendFile(__dirname + "/Develop/public/notes.html");
  });

app.get("/api/notes", function(req, res) {
  
  });


  // Corrects CSS
app.use(express.static('Develop/public'));




  





// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  