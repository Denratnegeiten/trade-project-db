module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("Payment", {
        ID_Payment: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_Booking: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true 
        },
        PaymentDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        Amount: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        Method: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return Payment;
};