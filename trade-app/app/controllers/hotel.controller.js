const db = require("../models");
const Hotel = db.Hotel;

exports.create = async (req, res) => {
    try {
        if (!req.body.Name || !req.body.Address || req.body.Stars == null) {
            return res.status(400).send({ message: "Name, Address, and Stars are required." });
        }
        const hotel = await Hotel.create(req.body);
        res.status(201).send(hotel);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.findAll = async (_req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.send(hotels);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const hotel = await Hotel.findByPk(req.params.id);
        hotel ? res.send(hotel) : res.status(404).send({ message: "Hotel not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.update = async (req, res) => {
    try {
        const result = await Hotel.update(req.body, { where: { ID_Hotel: req.params.id }});
        result[0] ? res.send({ message: "Updated" }) : res.status(404).send({ message: "Not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const result = await Hotel.destroy({ where: { ID_Hotel: req.params.id }});
        result ? res.send({ message: "Deleted" }) : res.status(404).send({ message: "Not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.deleteAll = async (_req, res) => {
    try {
        const count = await Hotel.destroy({ where: {}, truncate: false });
        res.send({ message: `${count} records deleted` });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};
