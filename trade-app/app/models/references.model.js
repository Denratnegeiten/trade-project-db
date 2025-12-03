module.exports = (db) => {
    db.Client.belongsTo(db.User, { foreignKey: 'ID_User', as: 'User' });
    db.User.hasMany(db.Client, { foreignKey: 'ID_User', as: 'Clients' });

    db.Employee.belongsTo(db.Hotel, { foreignKey: 'ID_Hotel', as: 'Hotel' });
    db.Hotel.hasMany(db.Employee, { foreignKey: 'ID_Hotel', as: 'Employees' });

    db.Room.belongsTo(db.Hotel, { foreignKey: 'ID_Hotel', as: 'Hotel' });
    db.Hotel.hasMany(db.Room, { foreignKey: 'ID_Hotel', as: 'Rooms' });

    db.Booking.belongsTo(db.Client, { foreignKey: 'ID_Client', as: 'Client' });
    db.Client.hasMany(db.Booking, { foreignKey: 'ID_Client', as: 'Bookings' });

    db.Booking.belongsTo(db.Room, { foreignKey: 'ID_Room', as: 'Room' });
    db.Room.hasMany(db.Booking, { foreignKey: 'ID_Room', as: 'Bookings' });

    db.Payment.belongsTo(db.Booking, { foreignKey: 'ID_Booking', as: 'Booking' });
    db.Booking.hasMany(db.Payment, { foreignKey: 'ID_Booking', as: 'Payments' });
};