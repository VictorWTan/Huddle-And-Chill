const Post = require('../../models/post')
const User = require('../../models/user')

const index = async (req, res) => {
    console.log('Get current user')
    const currentUser = User.findOne({name: req.user.name}, (error, user) => {
        // If error, show error
        if (error) {
            console.log(error)
            res.json(error)
        }
        // Otherwise render all of the user's posts
        else {
            console.log(res.json(user.posts))
        }
    })
}

const savePost = async (req, res) => {
    console.log('Saving post')
    const post = Post.create({
        name: req.user.name,
        content: req.post.content,
    }, (error, post) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            User.updateOne({name: req.user.name}, {$push : {post: post._id}}, (error) => {
                if (error) {
                    console.log(error)
                    res.json(error)
                }
                else {
                    console.log('Saved post id to user')
                    res.json(post._id)
                }
            })
        }
    })
}

const editPost = async (req, res) => {
    console.log('Running edit')
    Post.updateOne({_id: req.post._id}, {$set: {content: req.body.content}}, (error) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log('Updated Post')
        }
    })
}

const deletePost = async (req, res) => {
    console.log('Running delete')
    Post.findOneAndDelete({_id:req.post._id}, (error) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            User.updateOne({name: req.user.name}, {$pull: {posts: {_id: req.post._id}}})
        }
    })
}

const getAllPosts = async (req, res) => {
    console.log('Getting all current posts')
    const allPosts = Post.find({}, (error, post) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log(res.json(post))
        }
    })
}

module.exports = {
    index,
    savePost, 
    editPost,
    deletePost,
    getAllPosts
}

