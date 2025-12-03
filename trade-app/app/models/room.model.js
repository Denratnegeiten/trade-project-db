module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("Room", {
        ID_Room: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_room' // Указываем, что в БД поле называется id_room
        },
        ID_Hotel: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'id_hotel' // Соответствие: ID_Hotel -> id_hotel
        },
        RoomNumber: {
            type: Sequelize.STRING(10),
            allowNull: false,
            field: 'roomnumber' // Соответствие: RoomNumber -> roomnumber
        },
        Type: {
            type: Sequelize.STRING(50),
            allowNull: false,
            field: 'type' // Соответствие: Type -> type
        },
        Capacity: {
            type: Sequelize.INTEGER,
            allowNull: false,
            field: 'capacity' // Соответствие: Capacity -> capacity
        },
        Price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            field: 'price' // Соответствие: Price -> price
        },
        Status: {
            type: Sequelize.STRING(20),
            allowNull: false,
            defaultValue: 'available',
            field: 'status' // Соответствие: Status -> status
        }
    }, {
        freezeTableName: true
        // NOTE: Если вы делали ЛР 12 и добавили underscored: true в index.js,
        // то эта проблема могла бы решиться автоматически, но сейчас лучше
        // явное сопоставление через 'field'.
    });

    return Room;
};