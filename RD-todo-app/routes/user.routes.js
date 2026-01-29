import express from 'express';

export const UserRouter = express.Router();


UserRouter.post("/signup",(req,res)=>{
    try{

        /// write a logic that pushes the email and password from req.body to supabase
        /// once pushing is successful then send res as as signup successful

        //how to push data to supabase?
        //this node-express application should get linked with supabase project
        ////how to link node-express app with supabase project?
        //to link supabase and node-express.
        //we need supabase url and api key(service key not anon key)
        ////linking itself is another function, need to do/create in another file
        /// prefarably in a folder named connfigs
        res.status(200).json({message:"signup successful"})
    }catch(err){
        res.status(500).json({message:"something went wrong, please try gain later"})
    }
})