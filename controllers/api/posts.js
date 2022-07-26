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


