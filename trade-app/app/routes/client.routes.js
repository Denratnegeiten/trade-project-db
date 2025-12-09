module.exports = app => {
    const controller = require("../controllers/client.controller.js");
    const router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Client:
     *       type: object
     *       required:
     *         - name
     *         - email
     *         - phone
     *       properties:
     *         id:
     *           type: integer
     *           description: Уникальный идентификатор клиента
     *           example: 1
     *         name:
     *           type: string
     *           description: Полное имя клиента
     *           example: Иван Петров
     *         email:
     *           type: string
     *           format: email
     *           description: Адрес электронной почты
     *           example: ivan@example.com
     *         phone:
     *           type: string
     *           description: Контактный телефон
     *           example: +380501234567
     *         passport:
     *           type: string
     *           description: Номер паспорта (опционально)
     *           example: AB123456
     */

    /**
     * @swagger
     * /api/clients:
     *   post:
     *     summary: Create a new Client
     *     tags:
     *       - Clients
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Client'
     *     responses:
     *       201:
     *         description: Client created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Client'
     *       500:
     *         description: Internal server error
     */
    router.post("/", controller.create);

    /**
     * @swagger
     * /api/clients:
     *   get:
     *     summary: Retrieve a list of clients
     *     tags:
     *       - Clients
     *     responses:
     *       200:
     *         description: A list of clients
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Client'
     */
    router.get("/", controller.findAll);

    /**
     * @swagger
     * /api/clients/{id}:
     *   get:
     *     summary: Get client by ID
     *     tags:
     *       - Clients
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Client ID
     *     responses:
     *       200:
     *         description: Client data
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Client'
     *       404:
     *         description: Client not found
     */
    router.get("/:id", controller.findOne);

    /**
     * @swagger
     * /api/clients/{id}:
     *   put:
     *     summary: Update a client by ID
     *     tags:
     *       - Clients
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Client ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Client'
     *     responses:
     *       200:
     *         description: Client updated successfully
     *       404:
     *         description: Client not found
     */
    router.put("/:id", controller.update);

    /**
     * @swagger
     * /api/clients/{id}:
     *   delete:
     *     summary: Delete a client by ID
     *     tags:
     *       - Clients
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Client ID
     *     responses:
     *       204:
     *         description: Client deleted successfully (No Content)
     *       404:
     *         description: Client not found
     */
    router.delete("/:id", controller.delete);

    /**
     * @swagger
     * /api/clients:
     *   delete:
     *     summary: Delete all clients
     *     tags:
     *       - Clients
     *     responses:
     *       204:
     *         description: All clients deleted successfully (No Content)
     *       500:
     *         description: Internal server error
     */
    router.delete("/", controller.deleteAll);

    app.use("/api/clients", router);
};
