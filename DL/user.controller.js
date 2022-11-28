const {userData} =require('./user.model')

// C R U D

async function create(data){
    return await userData.create(data)
 }


async function read(filter){

    return await userData.find(filter)
 }


async function update(filter,data){
    return await userData.updateOne(filter,data)
 }



async function del(_id){
    return await update({_id},{ isActive : false})
 }

 



module.exports = {create , read ,update ,del}