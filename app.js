const express = require('express')
const app = express()
const web = require('./routes/web')
const dotenv = require('dotenv') //start localhost:4000
dotenv.config({path: './.env'})
const connectDb = require('./db/connectDb')
connectDb();

var cors = require('cors')
app.use(cors())


app.use(express.json())

app.use('/api', web)



app.listen(process.env.PORT, () => {
    console.log(`server is listening on localhost: ${process.env.PORT}`)
})