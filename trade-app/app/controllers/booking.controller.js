const db = require("../models");
const Booking = db.Booking;
const Payment = db.Payment;
const Room = db.Room;
const { QueryTypes } = db.Sequelize;

exports.create = async (req, res) => {
    try {
        const data = await Booking.create(req.body);
        res.status(201).send(data);
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const { page = 1, size = 10 } = req.query;
        const limit = parseInt(size);
        const offset = (parseInt(page) - 1) * limit;

        const data = await Booking.findAndCountAll({ limit, offset });

        res.send({
            totalItems: data.count,
            totalPages: Math.ceil(data.count / limit),
            currentPage: parseInt(page),
            data: data.rows
        });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const item = await Booking.findByPk(req.params.id);
        item ? res.send(item) : res.status(404).send({ message: "Not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.update = async (req, res) => {
    try {
        const result = await Booking.update(req.body, { where: { ID_Booking: req.params.id }});
        result[0] ? res.send({ message: "Updated" }) : res.status(404).send({ message: "Not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const result = await Booking.destroy({ where: { ID_Booking: req.params.id }});
        result ? res.send({ message: "Deleted" }) : res.status(404).send({ message: "Not found" });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.deleteAll = async (_req, res) => {
    try {
        const count = await Booking.destroy({ where: {}, truncate: false });
        res.send({ message: `${count} records deleted` });
    } catch (e) {
        res.status(500).send({ message: e.message });
    }
};

exports.getRoomTypeByBookingId = async (req, res) => {
    const id = req.params.id;
    const sqlQuery = `
        SELECT r.type 
        FROM "Room" r 
        INNER JOIN "Booking" b ON r.id_room = b.i_d__room 
        WHERE b.i_d__booking = :bookingId
    `;

    try {
        const result = await db.sequelize.query(sqlQuery, {
            replacements: { bookingId: id },
            type: QueryTypes.SELECT,
        });
        if (result.length > 0) res.send({ roomType: result[0].type });
        else res.status(404).send({ message: `Booking with id=${id} not found or no room type linked.` });
    } catch (err) {
        res.status(500).send({ message: err.message || "Error getting room type." });
    }
};

exports.getRoomByBookingId = async (req, res) => {
    const id = req.params.id;
    const sqlQuery = `
        SELECT r.* FROM "Room" r 
        INNER JOIN "Booking" b ON r.id_room = b.i_d__room 
        WHERE b.i_d__booking = :bookingId
    `;

    try {
        const result = await db.sequelize.query(sqlQuery, {
            replacements: { bookingId: id },
            type: QueryTypes.SELECT,
            model: Room,
            mapToModel: true,
        });
        if (result.length > 0) res.send(result[0]);
        else res.status(404).send({ message: `Booking with id=${id} not found or no Room linked.` });
    } catch (err) {
        res.status(500).send({ message: err.message || "Error getting Room." });
    }
};

exports.addPaymentAndIncreaseBookingCost = async (req, res) => {
    const id = req.params.id;
    const { Amount, paymentMethod } = req.body;

    if (!Amount || !paymentMethod) return res.status(400).send({ message: "Amount and paymentMethod required." });

    const t = await db.sequelize.transaction();

    try {
        const updatedBooking = await Booking.increment(
            { TotalAmount: Amount },
            { where: { ID_Booking: id }, transaction: t, returning: true }
        );

        if (!updatedBooking || updatedBooking[0][1] === 0) {
            await t.rollback();
            return res.status(404).send({ message: `Booking with id=${id} not found.` });
        }

        const newPayment = await Payment.create(
            { ID_Booking: id, Amount, PaymentDate: new Date(), Method: paymentMethod },
            { transaction: t }
        );

        await t.commit();
        const finalBooking = await Booking.findByPk(id);

        res.send({ message: "Payment added and booking updated.", updatedBooking: finalBooking, newPayment });
    } catch (err) {
        await t.rollback();
        res.status(500).send({ message: err.message || "Transaction failed." });
    }
};
