const express = require("express");
const app = express();

app.use(express.static("public")); // When do you have static?

app.get("/", (req, res) => {
  console.log("access to /"); // What exactly happens in the line below.
  res.send(` 
  <h1>Home Page</h1>
    <a href="/user_profiles">Click to see some early user profiles</a>
  `);
});

app.get("/about", (req, res) => {
  res.send("Welcome to my REITMAPS");
});

app.get("/user_profiles", (req, res) => {
  console.log(__dirname); // What does this do?
  res.sendFile(__dirname + "/views/desert-page.html"); // Not sure how to work this to a public folder.
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3000); // Can this app listen be anywhere in the code?
