var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var userSchema = new Schema({
    role: {
        type: String,
        enum: ['Admin', 'Consumer'],
        default: 'Admin'
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,

    },
    encryptedPassword: {
        type: String,
        required: [true, 'Password is required'],
    },


});


var User = mongoose.model('User', userSchema)




module.exports = User;