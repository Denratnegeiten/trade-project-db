const db = require("../models");
const Room = db.Room;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.roomNumber || !req.body.pricePerNight) {
    res.status(400).send({
      message: "Room number and price cannot be empty!"
    });
    return;
  }

  const room = {
    roomNumber: req.body.roomNumber,
    roomType: req.body.roomType,
    pricePerNight: req.body.pricePerNight,
    isAvailable: req.body.isAvailable
  };

  Room.create(room)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Room."
      });
    });
};

exports.findAll = (req, res) => {
  const roomNumber = req.query.roomNumber;
  var condition = roomNumber ? { roomNumber: { [Op.like]: `%${roomNumber}%` } } : null;

  Room.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rooms."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Room.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Room with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Room with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Room.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Room was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Room with id=${id}. Maybe Room was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Room with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Room.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Room was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Room with id=${id}. Maybe Room was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Room with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Room.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Rooms were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all rooms."
      });
    });
};