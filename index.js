const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const PORT = process.env.PORT || 5000
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("designVault server is running fine~!")
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})