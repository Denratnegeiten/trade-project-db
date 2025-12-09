module.exports = app => {
    const controller = require("../controllers/payment.controller.js");
    const router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Payment:
     *       type: object
     *       required:
     *         - bookingId
     *         - amount
     *         - method
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         bookingId:
     *           type: integer
     *           example: 50
     *         amount:
     *           type: number
     *           example: 750
     *         method:
     *           type: string
     *           example: cash
     *         date:
     *           type: string
     *           format: date-time
     *           example: 2025-12-09T12:00:00Z
     */

    router.post("/", controller.create);
    router.get("/", controller.findAll);
    router.get("/:id", controller.findOne);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
    router.delete("/", controller.deleteAll);

    app.use("/api/payments", router);
};
