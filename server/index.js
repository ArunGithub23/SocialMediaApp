const express=require('express');
const app=express(); 
const dotenv=require('dotenv')
require('./Config/dbcon.js')  //connecction to database
const AuthRoute=require('./Routes/AuthRoute.js');
const UserRoute=require('./Routes/UserRoute.js');
const PostRoute=require('./Routes/PostRoute.js')
app.use(express.json())

dotenv.config();
port=process.env.port;


//calling route
app.use('/auth',AuthRoute);
app.use('/user',UserRoute);
app.use('/post',PostRoute);



//listening at port
app.listen(port,function(err){
console.log("server is listening on port",port);
if(err){
    console.log("err is ",err);
}
})