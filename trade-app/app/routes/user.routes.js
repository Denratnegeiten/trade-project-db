module.exports = app => {
    const controller = require("../controllers/user.controller.js");
    const router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       required:
     *         - username
     *         - password
     *       properties:
     *         id:
     *           type: integer
     *           example: 1
     *         username:
     *           type: string
     *           example: admin
     *         password:
     *           type: string
     *           example: secret
     */

    router.post("/", controller.create);
    router.get("/", controller.findAll);
    router.get("/:id", controller.findOne);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);
    router.delete("/", controller.deleteAll);

    app.use("/api/users", router);
};
