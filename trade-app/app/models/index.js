const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
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

db.User.hasOne(db.Client, { 
    foreignKey: 'ID_User', 
    onDelete: 'CASCADE', 
    as: 'clientProfile'
});
db.Client.belongsTo(db.User, { 
    foreignKey: 'ID_User',
    as: 'userAccount'
});

db.Hotel.hasMany(db.Employee, { 
    foreignKey: 'ID_Hotel', 
    onDelete: 'RESTRICT', 
    as: 'employees' 
});
db.Employee.belongsTo(db.Hotel, { 
    foreignKey: 'ID_Hotel',
    onDelete: 'RESTRICT', 
    as: 'hotel' 
});

module.exports = db;