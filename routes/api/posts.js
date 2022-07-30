const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

router.get('/', postsCtrl.getAllPosts)

router.post('/create', postsCtrl.savePost)

router.get('/:id', postsCtrl.show)

router.put('/:id', postsCtrl.editPost)

router.delete('/:id', postsCtrl.deletePost)

router.get('/reply/:id', postsCtrl.getReplies)

router.post('/reply/:id', postsCtrl.addReply)

module.exports = router