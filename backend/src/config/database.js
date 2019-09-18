const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbUrl = 'mongodb://localhost:27017/todo';
module.exports = mongoose.connect(dbUrl, { useMongoClient: true });



