module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("Booking", {
        ID_Booking: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_Client: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ID_Room: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        CheckInDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        CheckOutDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        Status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'pending'
        },
        TotalAmount: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return Booking;
};