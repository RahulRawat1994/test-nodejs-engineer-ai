const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

module.exports =  mongoose.model('user', UserSchema);