import { useState } from 'react'

export default function SinglePost({ post, user}) {

    const [edit, setEdit] = useState(false)
    const [content, setContent] = useState('')

    const onClick = () => {
        setEdit(true)
    }

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setEdit(false)
    }

    return (
        <>
            <span>
                {post.name}
            </span>
            <br />
            <div>
                {post.content}
            </div>
            <br />
            <button onClick={onClick}>Edit</button>
            {edit && 
            <form onSubmit={handleSubmit}>
                <input type="text" value={content} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form> 
            }
            <br />
        </>
    )
}
