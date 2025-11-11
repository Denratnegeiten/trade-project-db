module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define("Booking", {
        ID_Booking: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_Room: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ID_Client: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ID_Employee: {
            type: Sequelize.INTEGER,
            allowNull: true 
        },
        CheckInDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        CheckOutDate: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        TotalCost: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        Status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return Booking;
};