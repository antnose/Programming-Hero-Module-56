const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

// All middleware is here
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
// 12.01
