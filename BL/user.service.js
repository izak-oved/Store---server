const userDL = require('../DL/user.controller')

async function createNewUser(data) {
    // validation fields
    if ( !data.email || !data.password) throw "missing data"

    // if user is exist
    let user = await userDL.read({ email: data.email })
    if (user[0]) throw 'user is exist'

    return await userDL.create(data)
}



async function getOrdersOfUser(_id) {
    return await userDL.readOnePopulate(_id)
}
async function getUsers(filter) {
    return await userDL.read(filter)
}

async function updateUser(email, newData) {
   
    const user = await userDL.read({ _id: email })
    if (!user[0]) throw ({ message: "your user dosnt exist" })
    console.log(user)
    return await userDL.update({ _id: email }, newData)
}

// let newUser = {
//     fullName: 'liron haim',
//     // email: 'Avi@Levi.com',
//     email: 'liron@gmail.com',
//     password: '98372jhxz',

// }


module.exports = { createNewUser, getUsers,getOrdersOfUser, updateUser }
