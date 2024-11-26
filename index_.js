const express = require("express");
const { handler } = require("./controller/index");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("*", async (req, res) => {
  res.send(await handler(req, res));
});

// app.get("*", async (req, res) => {
//   console.log("get", req.body);
//   // res.send(await handler(req, res));
// });

app.listen(port, () => {
  console.log(`Movie rating app running on port: ${port}`);
});
