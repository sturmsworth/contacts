const express = require("express");
const app = express();

app.get(`/`, (req, res) => {
  res.json({ message: "Welcome to the Contact Keeper API" });
});

// define routes
// app.use("defined-route", require("file-name"))
// these routes are defined below as the first argument in app.use()
//      you can name them whatever you like
// then you must import the file
//      this is done as the require() function
//      which is the second argument in app.use()
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
