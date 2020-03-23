const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(_dirname, "../public")));

app.listen(3001, () => {
  console.log("*** Listening On Port 3001 ***");
});
