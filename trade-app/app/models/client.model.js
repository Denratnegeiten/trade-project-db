module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("Client", {
        ID_Client: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_User: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        FirstName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        LastName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        Phone: {
            type: Sequelize.STRING(20),
            allowNull: true
        }
    }, {
        freezeTableName: true
    });

    return Client;
};