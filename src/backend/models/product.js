const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const employeeSchema = new Schema({
    product_title: {
        type: String,
    },
    price: {
        type: String,

    },
    quantity_total: {
        type: String,
    },
    quantity_booked: {
        type: String,
    }

});




module.exports = mongoose.model('Product', employeeSchema);