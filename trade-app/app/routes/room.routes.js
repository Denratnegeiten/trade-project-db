module.exports = app => {
  const roomController = require("../controllers/room.controller.js");
  var router = require("express").Router();

  router.post("/", roomController.create);
  router.get("/", roomController.findAll);
  router.get("/:id", roomController.findOne);
  router.put("/:id", roomController.update);
  router.delete("/:id", roomController.delete);
  router.delete("/", roomController.deleteAll);

  app.use('/api/rooms', router);
};