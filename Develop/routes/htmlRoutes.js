// DEPENDENCIES
// We need to include the path package to get the correct file path for our html

// const path = require('path');

// // ROUTING

// module.exports = (app) => {
//   // => HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content

//   app.get("Develop/public/assets/note.html", (req, res) => {
//     res.sendFile(path.join(__dirname, "/notes.html"));
//   });

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Develop/public/assets/index.html'));
//   });

//   app.get('Develop/public/assets/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Develop/public/assets/css/styles.css'));
//   });

//   // If no matching route is found default to home
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'Develop/public/assets/index.html'));
//   });

const path = require("path");
// For HTML Routing
module.exports = (app) => {
//   // => HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content
// return from notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    // return from index.html
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};