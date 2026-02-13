import User from "../models/Users";
import { Router } from "express";


Router.get('/',async ()=>{
    console.log('it runned')
    try{
        const res = await User.find()
       // res.json()

       // console.log()

    }catch(e)
    {
        console.log('error',e)
    }
})

export default Router