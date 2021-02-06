// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// 0205 const fs = require("fs");
const express = require('express');
// 0205 const path = require("path");

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
const app = express();
// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// CSS js
app.use(express.static(__dirname + "/Develop/public"));


// });
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

// reads db file and return the saved inputs to json
// app.get("/api/notes", (req, res) => {
//   res.sendFile(path.join(__dirname, "/db/db.json"))
// });

// routing to index.html
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

//POST: new note which will add it to the dbjson 

// app.post("/api/notes")




// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const dbJson = require("./Develop/db/db.json");







// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

