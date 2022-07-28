import { useState, useContext } from 'react'
import * as postsAPI from '../../utilities/posts-api'
import './SinglePost.css'
import { UserContext } from '../../pages/App/App'


export default function SinglePost({ post}) {

    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState('')
    const [replying, setReplying] = useState(false)
    const user = useContext(UserContext)

    const onEditClick = () => {
        setEdit(true)
    }

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        postsAPI.updatePost(post._id, content)
        setEdit(false)
    }

    const handleDelete = async (event) => {
        event.preventDefault()
        postsAPI.deletePost(post._id)
    }

    return (
        <div className="w-1/4 p-5 m-4 border border-black flex flex-col justify-center self-center">
            <span>
                {post.name}
            </span>
            <br />
            <div>
                {post.content}
            </div>
            <br />
            {user.name === post.name && <button className="my-5 px-5 border border-black rounded" onClick={onEditClick}>Edit</button>}
            {edit && 
            <form onSubmit={handleSubmit}>
                <input type="text" value={content} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form> 
            }
            {user.name === post.name && <button className="my-5 px-5 border border-black rounded" onClick={handleDelete}>Delete</button>}
            <br />
            {user.name !== post.name && <button className="my-5 px-5 border border-black rounded" >Reply</button>}
        </div>
    )
}
