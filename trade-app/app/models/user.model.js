module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        ID_User: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Login: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true 
        },
        PasswordHash: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        Email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true
        }
    }, {
        freezeTableName: true
    });
    return User;
};