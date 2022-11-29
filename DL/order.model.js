const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'user'
    },
     
    total: { type: Number },

    cart: [{
        itemId: { type: String,require: false },
        count: { type: Number,require: false },
        price: { type: Number ,require: false },
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