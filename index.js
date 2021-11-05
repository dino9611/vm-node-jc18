const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send(
    "<h1>welcome vm nodejs </h1>"
  );
});

// console.log("dari docker " + process.env.NAME);
app.listen(5000, () => console.log("app jalan di 5000  🚀🚀"));