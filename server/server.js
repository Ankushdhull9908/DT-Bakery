import express from "express"
import cors from 'cors'

import mongoDB from "./config/db.js"



const app = express()

mongoDB()

app.use('/api/user',)


app.get('/',(req,res)=>{
       res.send('server running')
})


app.listen(5500,()=>{
    console.log('server running on port 5500')
})