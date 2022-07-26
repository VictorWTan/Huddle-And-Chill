const mongoose = require('mongoose')
const { Schema, model } = mongoose

const replySchema = new Schema({
    name: String,
    content: String,
    likes: Number
}, {
    timestamps: true
})

const postSchema = new Schema({
    name: String,
    content: String,
    likes: {type: Number, default: 0},
    people_attending: [],
    maybe_attending: [],
    event_date: Date,
    replies: [{type: replySchema}]
}, {
    timestamps: true
})

const Post = model("Post", postSchema)
const Reply = model("Reply", replySchema)

module.exports = Post, Reply