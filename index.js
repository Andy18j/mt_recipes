const express = require("express")
// const { connect, connection } = require("mongoose")
const {connection} = require("./config/db")
const { recipeRouter } = require("./routes/recipe.route")
require("dotenv").config()

const app = express()
app.use(express.json())

app.use("/api",recipeRouter)

app.listen(process.env.port,async()=>{
    try{ 
        await connection
        console.log("Connected to the db")
    }
    catch(err){
        console.log(err)
        console.log("Not connected to db")
    }
    console.log(`port is running at the ${process.env.port}`)
})