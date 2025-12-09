module.exports = app => {
    const controller = require("../controllers/employee.controller.js");
    const router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Employee:
     *       type: object
     *       required:
     *         - name
     *         - position
     *         - hotelId
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         name:
     *           type: string
     *           example: Иван Иванов
     *         position:
     *           type: string
     *           example: Менеджер
     *         salary:
     *           type: number
     *           example: 500
     *         hotelId:
     *           type: integer
     *           example: 1
     */

    router.post("/", controller.create);
    router.get("/", controller.findAll);
    router.get("/:id", controller.findOne);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
    router.delete("/", controller.deleteAll);

    app.use("/api/employees", router);
};
