const express = require("express")
const userController = require("../BL/user.service")
const router = express.Router()

//read user | GET
router.get("/", async (req, res) => {
    try {
        let result = await userController.getUsers({})
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})
router.get("/:id", async (req, res) => {
    try {
        let result = await userController.getUsers({_id: req.params.id})
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})
router.get("/:id/orders", async (req, res) => {
    try {
        let result = await userController.getOrdersOfUser(req.params.id)
        res.send(result.orders)
    } catch (error) {
        res.status(401).send(error)
    }
})
//create user | POST
router.post("/", async (req, res) => {
    try {
        let result = await userController.createNewUser(req.body)
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})

//update >> email, fillter | PUT

router.put("/:id", async (req, res) => {
    try {
        let result =await userController.updateUser(req.body.email, req.body)
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})

//del >> email , change isActive | delete
router.delete("/:user", async (req, res) => {
    try {
        let result =await userController.updateUser(req.body.id, {isActive : false})
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})





// test
router.post("/test", async (req, res) => {
    try {
        console.log(req.body);
        
        res.send(req.body)
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports = router