import { useState, useContext } from 'react'
import * as postsAPI from '../../utilities/posts-api'
import { UserContext } from '../../pages/App/App'

export default function StatusPost({ post, setPost }) {
    const [content, setContent] = useState('')

    const user = useContext(UserContext)

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postsAPI.addToPosts(user.name, content)
    }

    return (
        <div className='flex flex-col border border-slate-500 rounded'>
            <div className='indent-8 font-bold text-xl pt-4'>Home</div>
            <div className="flex flex-row justify-center self-center w-full m-auto">
                <div className="flex flex-col justify-start self-start mr-10">P</div>
                <form className="flex flex-col justify-center self-center" onSubmit={handleSubmit}>
                    <textarea className="flex flex-col justify-center self-center border-slate-500 rounded resize-none" name="status-post" value={content} onChange={handleChange} cols="50" rows="3"></textarea>
                    <input className="my-5 px-5 border border-slate-500 rounded w-1/6 self-end" type="submit" value="Post" />
                </form>
            </div>
        </div>
    )
}
