module.exports = {
  HOST: "postgresdb",
  USER: "user",
  PASSWORD: "123",
  DB: "hotel_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};