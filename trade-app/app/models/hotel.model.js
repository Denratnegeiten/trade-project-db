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
        Stars: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        Category: {
            type: Sequelize.STRING(50),
            allowNull: true
        }
    }, {
        tableName: 'Hotel',
    });

    return Hotel;
};