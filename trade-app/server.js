const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();
const PORT = process.env.APP_PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Синхронизация базы данных с разрешением обновлений структуры таблиц (alter: true)
// Удален 'force: true', чтобы не терять данные при каждом запуске.
db.sequelize.sync({ alter: true }).then(() => {
    console.log("Database associations defined successfully. Tables structure updated.");
}).catch(err => {
    console.error("Failed to sync database:", err);
});


app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Hotel Booking application." });
});

require("./app/routes/client.routes")(app);
require("./app/routes/room.routes")(app);
require("./app/routes/employee.routes")(app);
require("./app/routes/booking.routes")(app);
require("./app/routes/payment.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/hotel.routes")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});