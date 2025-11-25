const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ alter: true }) 
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Hotel Booking application." });
});

require("./app/routes/room.routes")(app); 
require("./app/routes/client.routes")(app); 
require("./app/routes/employee.routes")(app); 
require("./app/routes/booking.routes")(app); 
require("./app/routes/payment.routes")(app); 
require("./app/routes/user.routes")(app); 
require("./app/routes/hotel.routes")(app); 

const PORT = process.env.APP_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});