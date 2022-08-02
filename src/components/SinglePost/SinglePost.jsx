import { useState, useContext, useEffect } from 'react'
import * as postsAPI from '../../utilities/posts-api'
import { UserContext } from '../../pages/App/App'
import Replies from '../Replies/Replies'


export default function SinglePost({ post }) {

    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState('')
    const [replying, setReplying] = useState(false)
    const [replyContent, setReplyContent] = useState('')
    const user = useContext(UserContext)

    const onEditClick = () => {
        setEdit(!edit)
    }

    const handleReply = () => {
        setReplying(!replying)
    }

    const handleSubmitReply = (event) => {
        event.preventDefault()
        handleReply()
        postsAPI.addToReplies(post._id, user.name, replyContent)
    }

    const handleReplyContent = (event) => {
        setReplyContent(event.target.value)
    }

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        postsAPI.updatePost(post._id, content)
        setEdit(!edit)
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        postsAPI.deletePost(post._id)
        postsAPI.deletePostFromUser(post._id)
    }

    useEffect(() => {
        (async () => {
            console.log(post.replies)
        })()
    }, [post.replies])

    return (
        <>
            <div className="w-full p-5 border border-slate-500 border-t-0 flex flex-col justify-center self-center">
                <span className='font-bold'>
                    {post.name}
                </span>
                <br />
                <div className='indent-2'>
                    {post.content}
                </div>
                <br />
                {Boolean(user.name === post.name & !edit) && <button className="my-2 px-3 py-1 border border-black rounded-3xl font-bold w-1/6 self-end" onClick={onEditClick}>Edit</button>}
                {edit &&
                    <>
                        <button className="flex justify-end" onClick={onEditClick}>X</button>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <textarea className="border border-slate-500" placeholder="Editing post" value={content} onChange={handleChange} cols="30" rows="10"></textarea>
                            <input className="my-2 px-3 py-1 border border-black rounded-3xl font-bold w-1/6 self-end" type="submit" value="Submit" />
                        </form>
                    </>
                }
                {user.name === post.name && <button className="my-2 px-3 py-1 border border-black rounded-3xl font-bold w-1/6 self-end" onClick={handleDelete}>Delete</button>}
                <br />
                {replying &&
                    <>
                        <button className="flex justify-end" onClick={handleReply}>X</button>
                        <form className="flex flex-col" onSubmit={handleSubmitReply}>
                            <textarea className="border border-slate-500 flex flex-col" placeholder={`Replying to ${post.name}`} value={replyContent} onChange={handleReplyContent} cols="30" rows="10"></textarea>
                            <input className="my-2 px-3 py-1 border border-black rounded-3xl font-bold w-1/6 self-end" type="submit" value="Submit" />
                        </form>
                    </>
                }
                {Boolean(user.name !== post.name & !replying) && <button onClick={handleReply} className="my-2 px-3 py-1 border border-black rounded-3xl font-bold w-1/6 self-end" >Reply</button>}
            </div>
            {post.replies.map((reply) => {
                return <Replies reply={reply} />
            })}

        </>
    )
}
