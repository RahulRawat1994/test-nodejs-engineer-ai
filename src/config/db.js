const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.CONN_STR, {useNewUrlParser: true});
