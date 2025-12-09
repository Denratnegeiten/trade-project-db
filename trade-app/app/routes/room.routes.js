module.exports = app => {
    const controller = require("../controllers/room.controller.js");
    const router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Room:
     *       type: object
     *       required:
     *         - roomnumber
     *         - type
     *         - capacity
     *         - price
     *         - status
     *         - hotelId
     *       properties:
     *         id:
     *           type: integer
     *           example: 101
     *         roomnumber:
     *           type: string
     *           example: 101
     *         type:
     *           type: string
     *           example: Deluxe
     *         capacity:
     *           type: number
     *           example: 2
     *         price:
     *           type: number
     *           example: 1000
     *         status:
     *           type: string
     *           example: available
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

    app.use("/api/rooms", router);
};
