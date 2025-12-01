const db = require("../models");
const Hotel = db.Hotel;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name || !req.body.city) {
    res.status(400).send({
      message: "Hotel name and city cannot be empty!"
    });
    return;
  }

  const hotel = {
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    rating: req.body.rating
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
  const city = req.query.city;
  var condition = city ? { city: { [Op.iLike]: `%${city}%` } } : null;

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
          message: `Cannot find Hotel with id=${id}.`
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
    where: { id: id }
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
    where: { id: id }
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