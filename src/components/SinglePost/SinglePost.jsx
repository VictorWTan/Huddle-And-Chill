import { useState, useContext } from 'react'
import * as postsAPI from '../../utilities/posts-api'
import './SinglePost.css'
import { UserContext } from '../../pages/App/App'


export default function SinglePost({ post}) {

    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState('')
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
        <div className="my-5 mx-30 border border-black flex flex-col justify-center self-center">
            <span>
                {post.name}
            </span>
            <br />
            <div>
                {post.content}
            </div>
            <br />
            {user.name === post.name && <button className="edit-button" onClick={onEditClick}>Edit</button>}
            {edit && 
            <form onSubmit={handleSubmit}>
                <input type="text" value={content} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form> 
            }
            {user.name === post.name && <button className="delete-button"onClick={handleDelete}>Delete</button>}
            <br />
        </div>
    )
}
