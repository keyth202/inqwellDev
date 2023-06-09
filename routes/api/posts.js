const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {body, validationResult} = require('express-validator');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');


//@route    Post API/posts
//@desc     Create a post
//@access   private
router.post('/', [auth, [
    body('text', 'Text is required' ).not().isEmpty()
] ], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        });

        //const post = await newPost.save();
        //const post = await new Post(newPost).save();
        const post =  await newPost.save();

        res.json(post);

     } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     }
    

});

//@route    Get API/posts
//@desc     Get all posts
//@access   private
router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({date:-1});
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     
    }

});

//@route    Get API/posts/:id
//@desc     Get posts by id
//@access   private
router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({msg:"Post not found"});
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg:"Post not found"});
        }
        res.status(500).send('Server Error');
     
    }

});

//@route    Delete API/post/
//@desc     Delete post
//@access   Private (need token)

router.delete('/:id', auth, async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        //check user 
        if(!post){
            return res.status(404).json({msg:"Post not found"});
        } else if(post.user.toString() !== req.user.id){
            return res.status(401).json({msg:"User not authorized"})
        } 
        await post.remove(); 

        res.json({msg: "Post removed"});
    }catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg:"Post not found"});
        }
        res.status(500).send('Server Error');
     
    }
});


//@route    Put API/posts
//@desc     Like a post
//@access   private
router.put('/like/:id', auth, async (req, res) => {
 try {
    
    const post = await Post.findById(req.params.id);

    //check if liked by use already
    //enhancement: if clicked unlike by changing below
    if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0){
        return res.status(400).json({msg:'Post already liked'});
    }

    post.likes.unshift({ user: req.user.id});

    await post.save();
    res.json(post.likes);

 } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
 }

});

//@route    Put API/posts
//@desc     Unlike a post
//@access   private
router.put('/unlike/:id', auth, async (req, res) => {
    try {
       
       const post = await Post.findById(req.params.id);
   
       //check if liked by use already
       if(post.likes.filter(like => like.user.toString() === req.user.id).length === 0){
           return res.status(400).json({msg:'Post has not yet been liked'});
       }
   
       //get remove index 
       const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

       post.likes.splice(removeIndex, 1);
   
       await post.save();
       res.json(post.likes);
   
    } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
    }
   
});

//@route    Post API/posts/comment/:id
//@desc     Create a comment on a post
//@access   private
router.post('/comment/:id', [auth, [
    body('text', 'Text is required' ).not().isEmpty()
] ], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    try {
        const user = await User.findById(req.user.id).select('-password');
        
        const post = await Post.findById(req.params.id);

        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        };

        post.comments.unshift(newComment);
        //const post = await newPost.save();
        //const post = await new Post(newPost).save();
        await post.save();

        res.json(post.comments);

     } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
     }
    

});

//@route    Delete API/post/comment/:id/:comment_id
//@desc     Delete comment on post
//@access   Private (need token)

router.delete('/comment/:id/:comment_id', auth, async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({msg:"Post not found"});
        }
        //pull out comment and check if it exists
        const comment = post.comments.find(comment => comment.id === req.params.comment_id);
        if(!comment){
            return res.status(404).json({msg:" Comment does not exist"});
        }
        //check user 
        if(comment.user.toString() !== req.user.id){
            return res.status(401).json({msg:"User not authorized"});
        }
        //get remove index 
        const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

        post.comments.splice(removeIndex, 1);
    
        await post.save();
        res.json(post.comments);


    }catch(err){
        console.error(err.message);
        if(err.kind === 'ObjectId'){
            return res.status(404).json({msg:"Post not found"});
        }
        res.status(500).send('Server Error');
     
    }
});
module.exports = router;
