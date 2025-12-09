const db = require("../models");
const Payment = db.Payment;

exports.create = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).send(payment);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.findAll = async (_req, res) => {
    try {
        const payments = await Payment.findAll();
        res.send(payments);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const payment = await Payment.findByPk(req.params.id);
        payment ? res.send(payment) : res.status(404).send({ message: "Payment not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.update = async (req, res) => {
    try {
        const result = await Payment.update(req.body, { where: { ID_Payment: req.params.id }});
        result[0] ? res.send({ message: "Updated" }) : res.status(404).send({ message: "Not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const result = await Payment.destroy({ where: { ID_Payment: req.params.id }});
        result ? res.send({ message: "Deleted" }) : res.status(404).send({ message: "Not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.deleteAll = async (_req, res) => {
    try {
        const count = await Payment.destroy({ where: {}, truncate: false });
        res.send({ message: `${count} records deleted` });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};
