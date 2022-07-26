import { useState } from 'react'
import * as postsAPI from '../../utilities/posts-api'
import './SinglePost.css'

export default function SinglePost({ post, user}) {

    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState('')

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
        <div className="single-post">
            <span>
                {post.name}
            </span>
            <br />
            <div>
                {post.content}
            </div>
            <br />
            <button onClick={onEditClick}>Edit</button>
            {edit && 
            <form onSubmit={handleSubmit}>
                <input type="text" value={content} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form> 
            }
            <button onClick={handleDelete}>Delete</button>
            <br />
        </div>
    )
}
