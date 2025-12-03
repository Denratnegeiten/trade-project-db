module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define("Hotel", {
        // ID_Hotel будет автоматически Primary Key и AutoIncrement
        ID_Hotel: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: Sequelize.STRING(50),
            allowNull: false, // Обязательное поле
            unique: true
        },
        Address: {
            type: Sequelize.STRING(255),
            allowNull: false // Обязательное поле
        },
        Stars: {
            // Stars — это целое число от 1 до 5
            type: Sequelize.INTEGER,
            allowNull: false, // Обязательное поле
            validate: {
                min: 1,
                max: 5
            }
        },
        Category: {
            type: Sequelize.STRING(50),
            allowNull: true // Сделаем его необязательным для проверки
        }
    }, {
        // Указываем имя таблицы
        tableName: 'Hotel',
        // Отключаем автоматические временные метки (если не нужны)
        // timestamps: false
    });

    // Определение связей (если есть)
    // Hotel.associate = function(models) {
    //     // associations can be defined here
    // };

    return Hotel;
};