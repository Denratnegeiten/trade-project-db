module.exports = (sequelize, Sequelize) => {
   const Hotel = sequelize.define("Hotel", {
        ID_Hotel: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true 
        },
        Address: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        Category: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });
    
    return Hotel;
};