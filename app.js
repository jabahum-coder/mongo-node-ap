const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')))

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// app.get("/api/v1/lists", listings.getAllLists);


//routes
require('./src/routes/listingsAndReviews.routes')(app)


// set port, listen for requests
const PORT = process.env.APIPORT || 2400;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});