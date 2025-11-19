module.exports = (db) => {

    db.Hotel.hasMany(db.Room, { foreignKey: 'ID_Hotel', onDelete: 'CASCADE' });
    db.Room.belongsTo(db.Hotel, { foreignKey: 'ID_Hotel' });

    db.Hotel.hasMany(db.Employee, { foreignKey: 'ID_Hotel', onDelete: 'SET NULL' });
    db.Employee.belongsTo(db.Hotel, { foreignKey: 'ID_Hotel' });

    db.User.hasOne(db.Client, { foreignKey: 'ID_User', onDelete: 'CASCADE' });
    db.Client.belongsTo(db.User, { foreignKey: 'ID_User' });

    db.Room.hasMany(db.Booking, { foreignKey: 'ID_Room', onDelete: 'RESTRICT' });
    db.Booking.belongsTo(db.Room, { foreignKey: 'ID_Room' });

    db.Client.hasMany(db.Booking, { foreignKey: 'ID_Client', onDelete: 'RESTRICT' });
    db.Booking.belongsTo(db.Client, { foreignKey: 'ID_Client' });

    db.Employee.hasMany(db.Booking, { foreignKey: 'ID_Employee', onDelete: 'SET NULL' });
    db.Booking.belongsTo(db.Employee, { foreignKey: 'ID_Employee' });

    db.Booking.hasOne(db.Payment, { foreignKey: 'ID_Booking', onDelete: 'CASCADE' });
    db.Payment.belongsTo(db.Booking, { foreignKey: 'ID_Booking' });


    console.log("Database associations defined successfully.");
};