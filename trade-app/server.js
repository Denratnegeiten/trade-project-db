const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.APP_PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Hotel Trade-APP API',
            version: '1.0.0',
            description: 'API documentation for Hotel Trade-APP',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
    },
    apis: ['./app/routes/*.routes.js'], // подключаем все маршруты
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Подключение всех роутов
require("./app/routes/client.routes")(app);
require("./app/routes/employee.routes")(app);
require("./app/routes/hotel.routes")(app);
require("./app/routes/room.routes")(app);
require("./app/routes/booking.routes")(app);
require("./app/routes/payment.routes")(app);
require("./app/routes/user.routes")(app);

// Синхронизация базы и запуск сервера
db.sequelize.sync({ alter: true }).then(() => {
    console.log("Database associations defined successfully. Tables structure updated.");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
}).catch(err => {
    console.error("Failed to sync database:", err);
});

// Базовый маршрут
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Hotel Booking application." });
});
