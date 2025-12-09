module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("Room", {
        ID_Room: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_room'
        },
        ID_Hotel: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'id_hotel'
        },
        RoomNumber: {
            type: Sequelize.STRING(10),
            allowNull: false,
            field: 'roomnumber'
        },
        Type: {
            type: Sequelize.STRING(50),
            allowNull: false,
            field: 'type'
        },
        Capacity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'capacity'
        },
        Price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            field: 'price'
        },
        Status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'available',
            field: 'status'
        }
    }, {
        freezeTableName: true
    });

    return Room;
};