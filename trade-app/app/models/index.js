const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,
    define: {
        underscored: true,
    },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Hotel = require("./hotel.model.js")(sequelize, Sequelize);
db.User = require("./user.model.js")(sequelize, Sequelize);
db.Client = require("./client.model.js")(sequelize, Sequelize);
db.Employee = require("./employee.model.js")(sequelize, Sequelize);
db.Room = require("./room.model.js")(sequelize, Sequelize);
db.Booking = require("./booking.model.js")(sequelize, Sequelize);
db.Payment = require("./payment.model.js")(sequelize, Sequelize);

require('./references.model.js')(db);

module.exports = db;