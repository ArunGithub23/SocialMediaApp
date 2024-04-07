const express=require('express');
const { createPost,getPost,updatePost,deletePost } = require('../Controller/PostController');
const router=express.Router();

router.post('/',createPost)

router.get("/:id",getPost)
router.put("/:id",updatePost)
router.delete("/:id",deletePost)


module.exports=router;