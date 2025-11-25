module.exports = app => {
  // Импортируем контроллер комнат
  const roomController = require("../controllers/room.controller.js");
  
  // Создаем роутер Express
  var router = require("express").Router();

  // 1. POST /api/rooms - Создать новую комнату
  router.post("/", roomController.create);

  // 2. GET /api/rooms - Получить все комнаты (с возможностью фильтрации)
  router.get("/", roomController.findAll);

  // 3. GET /api/rooms/:id - Получить одну комнату по ID
  router.get("/:id", roomController.findOne);

  // 4. PUT /api/rooms/:id - Обновить комнату по ID
  router.put("/:id", roomController.update);

  // 5. DELETE /api/rooms/:id - Удалить комнату по ID
  router.delete("/:id", roomController.delete);

  // 6. DELETE /api/rooms - Удалить все комнаты
  router.delete("/", roomController.deleteAll);

  // Применяем роутер к базовому URL /api/rooms
  app.use('/api/rooms', router);
};