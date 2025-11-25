const db = require("../models");
const Hotel = db.Hotel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.Name || !req.body.Address) {
        res.status(400).send({
            message: "Content cannot be empty! Name and Address are required fields."
        });
        return;
    }

    const hotel = {
        Name: req.body.Name,
        Address: req.body.Address,
        Category: req.body.Category || '3 Stars'
    };

    Hotel.create(hotel)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Hotel."
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    const condition = name ? { Name: { [Op.like]: `%${name}%` } } : null;

    Hotel.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving hotels."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Hotel.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Hotel with ID=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Hotel with id=" + id
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Hotel.update(req.body, {
        where: { ID_Hotel: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Hotel was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Hotel with id=${id}. Maybe Hotel was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Hotel with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Hotel.destroy({
        where: { ID_Hotel: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Hotel was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Hotel with id=${id}. Maybe Hotel was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Hotel with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Hotel.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Hotels were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all hotels."
            });
        });
};