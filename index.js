const express = require("express")
const app = express()
const productsRoute = require("./products")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/products", productsRoute)

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`)
})