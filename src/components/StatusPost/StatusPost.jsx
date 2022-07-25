import { useState } from 'react'

export default function StatusPost({post, setPost}) {
    const [status, setStatus] = useState('')

    const handleChange = (event) => {
        setStatus(event.target.value)
    }

    const handleSubmit = (event) => {

    }

    return (
        <>
            <div>Profile Picture</div>
            <form onSubmit={handleSubmit}>
                <textarea name="status-post" value={status} onChange={handleChange} cols="30" rows="10"></textarea>
                <input type="submit" value="Tweet" />
            </form>
        </>
    )
}
