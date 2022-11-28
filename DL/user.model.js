const mongoose = require("mongoose");
const {orderSchema} =require('./order.model')

const userSchema = new mongoose.Schema({

    // fName , lName  
    // -- permission
    fullName: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        Select: false
    },
   orders : [orderSchema],
    createDate: {
        type: Date,
        default: Date.now

    },

    isActive: {
        type: Boolean,
        default: true
    },

})




const userData =mongoose.model('user',userSchema);
module.exports = {userData};