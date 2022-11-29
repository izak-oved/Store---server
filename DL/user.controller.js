const {userData} =require('./user.model')

// C R U D

async function create(data){
    return await userData.create(data)
 }


async function read(filter){

    return await userData.find(filter)
 }


 async function readOne(_id){
    let res = await userData.find({_id:_id})
    return res.length > 0 ? res[0] : null
 }
 async function readOnePopulate(_id){
    let res = await userData.find({_id:_id}).populate('orders')
    return res.length > 0 ? res[0] : null
 }

async function update(filter,data){
    return await userData.updateOne(filter,data)
 }



async function del(_id){
    return await update({_id},{ isActive : false})
 }

 



module.exports = {create , read ,update ,del, readOne,readOnePopulate}