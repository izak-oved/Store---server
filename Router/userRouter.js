const express = require("express")
const userController = require("../BL/user.service")
const router = express.Router()


router.get("/", async (req, res) => {
    try {
        res.send(await userController.getAllUsers)
    } catch (error) {
        res.status(401).send(error)
    }
})
router.post("/", async (req, res) => {
    try {
        if (!req.body) {
            throw { massage: "missing details" }
        }
        res.send(await userController.createNewUser(req.body))
    } catch (error) {
        res.status(401).send(error)
    }
})

router.post("/test", async (req, res) => {
    try {
        console.log(req.body);
        throw "bla bla error"
        res.send(req.body)
    } catch (error) {
        res.status(401).send(error)
    }
})

module.exports = router