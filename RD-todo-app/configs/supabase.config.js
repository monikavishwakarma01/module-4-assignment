//// how to link url and secret key ??
// we need to install  npm package related ti supabase, that is npm i @supabase/supabase-js


//createClient is a invilt function of  supabase which accepts key and url and it connects our node-express app with supabase project
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

 let supabase;

 try{
    supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SECRET_KEY 
    );

    console.log("supabase connected");
 }
 catch(err){
    console.log(" failed to connect supabase", err);
 }

 export default supabase;