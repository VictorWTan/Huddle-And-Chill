const Post = require('../../models/post')
const User = require('../../models/user')
const Reply = require('../../models/post')

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

const show = async (req, res) => {
    console.log('Get single post')
    Post.findOne({_id: req.params.id}, (error, data) => {
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
    console.log(req.body)
    Post.updateOne({_id: req.body._id}, {$set: {content: req.body.content}}, (error) => {
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
    Post.findOneAndDelete({_id:req.params.id}, (error, data) => {
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

const deletePostFromUser = async(req, res) => {
    console.log('Deleting Post Id from User')
    User.updateOne({name: req.user.name}, {$pull: {posts: req.params.id}}, (error, data) => {
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

const addReply = async (req, res) => {
    console.log('Adding Reply')
    Post.findById(req.params.id, (error, post) => {
        let reply = new Reply();
        reply.name = req.body.name
        reply.content = req.body.content
        post.replies.push(reply)
        post.save()
        console.log(req.body)
    })
} 

const getReplies = async (req, res) => {
    console.log('Getting all replies')
    Post.findById({_id: req.params.id}, {replies: 1}, (error, data) => {
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
    show,
    savePost, 
    editPost,
    deletePost,
    getAllPosts,
    addReply,
    getReplies,
    deletePostFromUser
}

