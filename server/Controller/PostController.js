const PostModel=require('../Models/postModel.js');



//create Post
 const createPost=async (req,res)=>{
    console.log("okk1")
    console.log("body",req.body)
    

    const newPost=new PostModel(req.body);
    console.log("okk2")

    try {
        await newPost.save()
        res.status(200).json("post created")
    } catch (error) {
            res.status(500).json(error)   
    }

}



//get post
const getPost=async(req,res)=>{

        const id=req.params.id;
        try {
            const post=await PostModel.findById(id)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }

}



//update post
const updatePost=async(req,res)=>{

    const postId=req.params.id;
    const {userId}=req.body

    try {
        const post=await PostModel.findById(postId);
        if(post.userId===userId){
            await post.updateOne({$set :req.body})
            res.status(200).json("post updated")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status.json(error)
    }
}



//delete post
const deletePost=async(req,res)=>{
    const id=req.params.id;
    const {userId}=req.body

    try {
        const post=await PostModel.findById(id)
        if (post.userId===userId) {
            await post.deleteOne();
            res.status(200).json("post deleted")
            
        } else {
            res.status(403).json("Action Forbidden")
        }


    } catch (error) {
        
    }
}


// like unklike post

const likePost=async(req,res)=>{

        const id=req.params.id
        const {userId}=req.body

        try {
            
                const post=await PostModel.findById(id)
                if (!post.likes.includes(userId)) {
                    await post.updateOne({$push:{likes:userId}})
                     res.status(200).json("Post liked")   
                } else {
                    await post.updateOne({$pull:{likes:userId}})
                     res.status(200).json("Post unliked") 
                }

        } catch (error) {
         res.status(403).json(error)   
        }

}
module.exports={createPost,getPost,updatePost,deletePost}