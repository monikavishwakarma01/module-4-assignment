import express from 'express';
import { UserRouter } from './routes/user.routes.js';

const app = express();
app.use(express.json());


//test route
app.get("/", (req,res)=>{
    try{
        res.status(200).json({message:"this is test route"})
    }catch(err){
        res.status(500).json({message:"something went wrong, please try gain later"})
    }
})

// Routes 
app.use("/users", UserRouter)

//undefined route handler
app.use((req,res)=>{
    try{
        res.status(404).json({message:"this is not found"})
    }catch(err){
        res.status(500).json({message:"something went wrong, please try gain later"})
    }
})

app.listen(2900, ()=>{
    console.log('server started')
})