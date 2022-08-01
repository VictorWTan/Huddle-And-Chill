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
        <div className='flex flex-col border border-slate-500'>
            <div className='indent-8 font-bold text-xl pt-4'>Home</div>
            <div className="flex flex-row justify-center self-center w-full m-auto">
                <div className="flex flex-col justify-start self-start mr-10"></div>
                <form className="flex flex-col justify-center self-center" onSubmit={handleSubmit}>
                    <textarea className="flex flex-col justify-center self-center border-slate-500 rounded resize-none" placeholder="What's Happening?"name="status-post" value={content} onChange={handleChange} cols="50" rows="3"></textarea>
                    <input className="my-2 mb-5 px-5 py-1 bg-sky-600 text-white rounded-3xl font-bold w-1/4 self-end" type="submit" value="Post" />
                </form>
            </div>
        </div>
    )
}
