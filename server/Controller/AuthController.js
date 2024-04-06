const UserModel=require('../Models/userModel.js');


//registering new user
 const registerUser=async(req,res)=>{

    //console.log("body id",req.body)

const {username,password,firstname,lastname}=req.body;
const newUser=new UserModel({username,password,firstname,lastname});

try {
    await newUser.save();
    res.status(200).json(newUser)
    
} catch (error) {
    res.status(500).json({message:error.message})
}


}

const loginUser=async(req,res)=>{

    const {username,password}=req.body;

    try {
        
    user=await UserModel.findOne({username:username});
    if(user){
        if(password==user.password){
            res.status(200).json(user)
        }
        else{
            res.status(400).json("wrong password")
        }
    }
    else{
        res.status(404).json("User Does Not Exist");
    }
} catch (error) {
        res.status(500).json({message:error.message})

}
}


module.exports={registerUser,loginUser}