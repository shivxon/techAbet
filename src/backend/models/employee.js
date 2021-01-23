const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: String,

    },
    image: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    salary: {
        type: String,
    },

});




module.exports = mongoose.model('employeeDetails', employeeSchema);