const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'user'
    },
    // total 
    total: { type: Number },
    cart: [{
        itemId: { type: String },
        count: { type: Number },
        price: { type: Number },
    }],

    status: {
        type: String,
        enum: ["shipment", "done", "order"],
        default: "order"
    },
    orderDate: {
        type: Date,
        default: Date.now

    },

    isActive: {
        type: Boolean,
        default: true
    },

})




const orderData = mongoose.model('order', orderSchema);
module.exports = {  orderData, orderSchema };