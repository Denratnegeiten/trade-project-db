module.exports = app => {
    const controller = require("../controllers/hotel.controller.js");
    const router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Hotel:
     *       type: object
     *       required:
     *         - Name
     *         - Address
     *         - Stars
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         Name:
     *           type: string
     *           example: Grand Hotel
     *         Address:
     *           type: string
     *           example: ул. Ленина, 10
     *         Stars:
     *           type: number
     *           example: 5
     */

    router.post("/", controller.create);
    router.get("/", controller.findAll);
    router.get("/:id", controller.findOne);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
    router.delete("/", controller.deleteAll);

    app.use("/api/hotels", router);
};
