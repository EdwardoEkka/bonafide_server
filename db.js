const mongoose = require('mongoose');
require('dotenv').config();


let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        dbConnection = mongoose.connection;
        return cb(null); 
      })
      .catch((err) => {
        console.error(err);
        return cb(err); 
      });
  },
  getDb: () => dbConnection,
};
