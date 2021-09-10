const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

// current timestamp in milliseconds, date, month, year, hours, minutes
let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
const data =
  "Date - " +
  year +
  "-" +
  month +
  "-" +
  date +
  ", Time - " +
  hours +
  ":" +
  minutes;

//Specifying destination file
const destinationFile = path.join("./output", "/current-date-time.txt");

async function loadApp() {
  try {
    // Purpose => Logging
    app.use((req, res, next) => {
      console.log(`${req.url} ${req.method} at ${new Date()}`);
      res.send(data);
      next();
    });
    fs.writeFileSync(destinationFile, data);

    //Starting server
    app.listen(3001, () => console.log(`Server listening at port 3001...`));
  } catch (err) {
    console.error(err);
    process.exit();
  }
}
loadApp();