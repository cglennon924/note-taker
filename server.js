const express= require("express")
const fs = require("fs")
const app= express()
const PORT = process.env.PORT || 4000
let notes = JSON.parse(fs.readFileSync(__dirname + "/Develop/db/db.json", "utf-8", function(err){
  if(err) throw err 
})) || [] 


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
    return res.json(notes) 
  });

app.post("/api/notes", function(req, res) {
    let noteEl = req.body
    noteEl.id = notes.length
    console.log(noteEl)
    notes.push(noteEl)
    fs.writeFileSync(__dirname + "/Develop/db/db.json", JSON.stringify(notes, null, 2), function(err){
      if(err) throw err
    })
    
    res.end()
  
  
  });

app.delete("/api/notes/:id", function(req,res){
  let id = req.params.id
  notes.splice(id, 1)
  for(var i = 0; i<notes.length; i++){
    notes[i].id = i
  }
  fs.writeFileSync(__dirname + "/Develop/db/db.json", JSON.stringify(notes, null, 2), function(err){
    if(err) throw err
  })
res.end()
})

// Corrects CSS
app.use(express.static('Develop/public'));




  





// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  