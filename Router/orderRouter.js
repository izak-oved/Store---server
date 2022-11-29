const express= require("express")
const router=express.Router()
const orderService=require("../BL/order.service")


// create >> data , user | POST

router.post("/", async (req, res) => {
    try {
        let result =await orderService.createNewOrder(req.body)
        console.log(result);
        res.status(201).send(result)

    } catch (error) {
        res.status(401).send(error)
    }
})


// read >> data , user | GET

router.get("/", async (req, res) => {
    try {
        let result =await orderService.getOrders({})
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.get("/:id", async (req, res) => {
    try {
        let result =await orderService.getOrders({_id: req.params.id})
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})

router.get("/user/:id", async (req, res) => {
    try {
        let result =await orderService.getOrders({userId : req.params.id})
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})

// update >> fillter ,user | PUT
router.put("/:id", async (req, res) => {
    try {
        let result =await orderService.updateOrder(req.params.id, req.body)
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})

// del >> fillter ,user | POST
router.delete("/:id", async (req, res) => {
    try {
        let result =await orderService.updateOrder(req.params.id, {isActive : false})
        console.log(result);
        res.send(result)
    } catch (error) {
        res.status(401).send(error)
    }
})
//

module.exports=router