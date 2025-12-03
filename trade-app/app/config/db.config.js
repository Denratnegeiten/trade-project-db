module.exports = {
  HOST: process.env.DB_HOST || "localhost", // Используем DB_HOST (postgresdb)
  USER: process.env.DB_USER || "postgres", // Используем DB_USER (postgres)
  PASSWORD: process.env.DB_PASSWORD || "123456", // Используем DB_PASSWORD
  DB: process.env.DB_NAME || "hotel_db", // Используем DB_NAME
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};