const express = require('express');
const tasks = require('./routes/taskroutes')
const connectDB = require('./db/connect')
require('dotenv').config()
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors());
app.use('/api',tasks)


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,console.log(`server listening on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()