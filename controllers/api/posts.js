const Post = require('../../models/post')
const User = require('../../models/user')

const index = async (req, res) => {
    console.log('Get current user posts')
    User.findOne({name: req.user.name}, (error, user) => {
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
    console.log(req.user.name)
    console.log(req.body)
    Post.create({
        name: req.user.name,
        content: req.body.content,
    }, (error, post) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            User.updateOne({name: req.user.name}, {$push : {posts: post._id}}, (error) => {
                if (error) {
                    console.log(error)
                    res.json(error)
                }
                else {
                    console.log('Saved post id to user')
                    console.log(post._id)
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
    Post.find({}, (error, data) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log(data)
            res.json(data)
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

