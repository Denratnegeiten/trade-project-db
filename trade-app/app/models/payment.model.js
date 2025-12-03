module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("Payment", {
        ID_Payment: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_Booking: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        Amount: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        PaymentDate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        Method: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'pending'
        }
    }, {
        freezeTableName: true
    });

    return Payment;
};