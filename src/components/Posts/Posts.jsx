import * as postsAPI from '../../utilities/posts-api'
import { useEffect, useState } from 'react'
import SinglePost from '../SinglePost/SinglePost'

export default function Posts({user}) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () => {
            const posts = await postsAPI.getAll()
            console.log(`Getting posts from posts.jsx ${posts}`)
            setPosts(posts)
        })()
    }, [])

    return (
        <>
           <div>
                {posts.map((post) => {
                    return <SinglePost post={post} key={post._id} user={user}/>
                })}
           </div>
        </>
    )
}

