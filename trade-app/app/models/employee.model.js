module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("Employee", {
        ID_Employee: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_Hotel: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        FirstName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        LastName: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        Position: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        freezeTableName: true
    });

    return Employee;
};