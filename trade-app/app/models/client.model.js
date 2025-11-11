module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("Client", {
        ID_Client: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_User: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true 
        },
        FirstName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        LastName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Phone: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return Client;
};