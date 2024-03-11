const express = require("express");
const app = express();
const app_route = require("./routes/app_route");

// set view engine
app.set("view engine", "ejs");

// set static middleware files
app.use(express.static("public"));

// link to routes
app.use(app_route);

// 404 page
app.use((req, res) => {
  res.status(404).render("error.ejs");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Listening to request coming from ${port}`);
});
