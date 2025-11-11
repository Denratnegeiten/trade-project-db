module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("Room", {
        ID_Room: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_Hotel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        RoomNumber: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        Type: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        PricePerNight: {
            type: Sequelize.DECIMAL(8, 2),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return Room;
};