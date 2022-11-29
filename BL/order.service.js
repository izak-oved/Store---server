const orderDL = require('../DL/order.controller')
const userDL = require('../DL/user.controller')

async function createNewOrder(data) {
    // validation fields
    if (!data.userId || !data.total || !data.cart.length > 0) throw "missing data"

    // if user is exist
    let user = await userDL.readOne({_id:data.userId})
    if(!user) throw 'user does not exist'

    let newOrder = await orderDL.create(data)
    user.orders.push(newOrder._id)
    await userDL.update({_id:user._id},user)
    return newOrder;
}

// get order
async function getOrders(filter) {
    console.log(filter);
    return await orderDL.read(filter)
}

async function updateOrder(id, newData) {
    // data.user._id == orderDL.readOneAndPopulate({data})
    //לבדוק שמי שבא לשנוצת את ההזמנה הוא בעל ההזמנה
    const order = await orderDL.read({ _id: id })
    if (!order[0]) throw ({ message: "your order dosnt exist" })
    console.log(order)
    return await orderDL.update({ _id: id }, newData)
}



// updateOrder({
//     orderId: "6384d5e9143a4d0db7c36170",
//     newData: { status: "done" }
// })
// getAllOrder()
module.exports = { createNewOrder, getOrders, updateOrder }