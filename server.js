const express= require("express")
const fs = require("fs")
const app= express()

const PORT = process.env.PORT || 4000

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  