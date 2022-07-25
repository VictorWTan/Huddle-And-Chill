const Post = require('../../models/post')
const User = require('../../models/user')

async function index(req, res) {
    console.log('Running index for controllers api')
    const currentUser = User.findOne({name: req.user.name}, (error, user) => {
        if (error) {
            console.log(error)
            res.json(error)
        }
        else {
            console.log(res.json(user.posts))
        }
    })
}