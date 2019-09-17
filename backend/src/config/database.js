const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbUrl = 'mongodb://localhost/todo';
module.exports = mongoose.connect(dbUrl, { useMongoClient: true });
