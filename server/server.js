const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../build")));

app.get('/product/1', (req, res)=>{
  res.sendFile(path.join(__dirname, "../build", "../build/index.html"))
})

app.listen(80, () => {
  console.log("*** Listening On Port 80 ***");
});

