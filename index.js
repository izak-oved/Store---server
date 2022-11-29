require('dotenv').config()

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

PORT = process.env.PORT || 5000

// התחברות לדאטה בייס
require("./DL/db").connect()

app.use("/api/user",require("./Router/userRouter"))
app.use("/api/order",require("./Router/orderRouter"))



app.listen(PORT, () => console.log(`Server is running at Port ${PORT}`))

