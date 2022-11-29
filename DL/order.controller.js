const {orderData} =require('./order.model')

// C R U D

async function create(data,proj){
    return await orderData.create(data,proj)
 }


 async function read(filter, proj){

    
    return await orderData.find(filter, proj)
 }


 async function readOneAndPopulate(filter,proj){

    return await orderData.find(filter,proj).populate("userId")
 }
 

async function update(filter,dataתproj){
    return await orderData.updateOne(filter,data,proj)
 }



async function del(_id){
    return await update({_id},{ isActive : false})
 }

 



module.exports = {create , read ,update ,del ,readOneAndPopulate}