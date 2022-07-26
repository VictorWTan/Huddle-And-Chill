import { useState } from 'react'
import * as postsAPI from '../../utilities/posts-api'

export default function StatusPost({post, setPost, user}) {
    const [content, setContent] = useState('')

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        postsAPI.addToPosts(user, content)
    }

    return (
        <>
            <div>Profile Picture</div>
            <form onSubmit={handleSubmit}>
                <textarea name="status-post" value={content} onChange={handleChange} cols="30" rows="10"></textarea>
                <input type="submit" value="Tweet" />
            </form>
        </>
    )
}
