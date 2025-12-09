module.exports = app => {
    const controller = require("../controllers/booking.controller.js");
    const router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Booking:
     *       type: object
     *       required:
     *         - clientId
     *         - roomId
     *         - checkInDate
     *         - checkOutDate
     *         - totalCost
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         clientId:
     *           type: integer
     *           example: 1
     *         roomId:
     *           type: integer
     *           example: 101
     *         checkInDate:
     *           type: string
     *           format: date
     *           example: 2025-12-10
     *         checkOutDate:
     *           type: string
     *           format: date
     *           example: 2025-12-15
     *         totalCost:
     *           type: number
     *           example: 750.00
     */

    router.post("/", controller.create);
    router.get("/", controller.findAll);
    router.get("/:id", controller.findOne);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
    router.delete("/", controller.deleteAll);

    // Дополнительные методы
    router.get("/:id/roomtype", controller.getRoomTypeByBookingId);
    router.get("/:id/room", controller.getRoomByBookingId);
    router.post("/:id/add-payment", controller.addPaymentAndIncreaseBookingCost);

    app.use("/api/bookings", router);
};
