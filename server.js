const express= require("express")
const fs = require("fs")
const app= express()

const PORT = process.env.PORT || 4000

//ROUTES

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Develop/public/index.html");
  });

app.get("/notes", function(req, res) {
    res.sendFile(__dirname + "/Develop/public/notes.html");
  });
// Corrects CSS
app.use(express.static('public'));


  





// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  