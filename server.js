// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
const fs = require("fs");
const express = require('express');
const path = require("path");

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// CSS
app.use(express.static(__dirname + "public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// notes.html
app.get("/notes", (req,res) => {
  res.sendFiel(path.join(__dirname,"./public/notes.html"));

});

// reads db file and return the saved inputs to json
app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/db/db.json"))
});

// routing to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//POST



require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const dbJson = require("./Develop/db/db.json")



// node server.js to see what port is listening on.

app.use(express.static("./"));
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);





// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

