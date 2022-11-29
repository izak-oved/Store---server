const mongoose = require("mongoose");
const {orderSchema} =require('./order.model')

const userSchema = new mongoose.Schema({
 
   
    fName: {
        type: String
    },
    lName: {
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
   orders : [{
    type : mongoose.SchemaTypes.ObjectId,
    ref : 'order'
   }],
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