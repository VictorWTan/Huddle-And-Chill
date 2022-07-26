const express = require('express')
const router = express.Router()
const postsCtrl = require('../../controllers/api/posts')

router.get('/', postsCtrl.index)

router.post('/', postsCtrl.savePost)

router.put('/:id', postsCtrl.editPost)

router.delete('/:id', postsCtrl.deletePost)

module.exports = router