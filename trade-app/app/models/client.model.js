module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("Client", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true 
        },
        firstName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {               // ← добавили email, ты его используешь
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true
        },
        phone: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return Client;
};
