import { useState } from 'react'
import * as postsAPI from '../../utilities/posts-api'

export default function StatusPost({post, setPost, user}) {
    const [content, setContent] = useState('')

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postsAPI.addToPosts(user, content)
    }

    return (
        <div className="flex flex-col justify-center self-center border border-black rounded w-1/3 m-auto">
            <div className="flex flex-col justify-center self-center">Profile Picture</div>
            <form className="flex flex-col justify-center self-center" onSubmit={handleSubmit}>
                <textarea className="flex flex-col justify-center self-center border border-black rounded" name="status-post" value={content} onChange={handleChange} cols="30" rows="10"></textarea>
                <input className="my-5 px-5 border border-black rounded" type="submit" value="Post" />
            </form>
        </div>
    )
}
