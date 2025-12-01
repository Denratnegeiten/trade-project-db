const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models"); // Подключаем модели

const app = express();
const PORT = process.env.APP_PORT || 8080;

// CORS
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Синхронизация базы данных
db.sequelize.sync({ alter: true })
  .then(() => console.log("Database synchronized successfully."))
  .catch(err => console.log("Failed to sync database: " + err.message));

// Главная страница
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Hotel Booking application." });
});

// =====================
// Подключение маршрутов
// =====================

// Client routes
const clientRoutes = require("./app/routes/client.routes");
clientRoutes(app); // вызываем функцию и передаем app

// Room routes
const roomRoutes = require("./app/routes/room.routes");
roomRoutes(app);

// Employee routes
const employeeRoutes = require("./app/routes/employee.routes");
employeeRoutes(app);

/*// Booking routes
const bookingRoutes = require("./app/routes/booking.routes");
bookingRoutes(app);

// Payment routes
const paymentRoutes = require("./app/routes/payment.routes");
paymentRoutes(app);

// User routes
const userRoutes = require("./app/routes/user.routes");
userRoutes(app);

// Hotel routes
const hotelRoutes = require("./app/routes/hotel.routes");
hotelRoutes(app);
*/
// =====================
// Запуск сервера
// =====================
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
