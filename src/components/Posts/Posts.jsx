import * as postsAPI from '../../utilities/posts-api'
import { useEffect, useState } from 'react'
import SinglePost from '../SinglePost/SinglePost'

export default function Posts({user, posts, setPosts}) {

    useEffect(() => {
        (async () => {
            const allPosts = await postsAPI.getAll()
            console.log(`Getting posts from posts.jsx ${JSON.stringify(allPosts)}`)
            setPosts(allPosts)
        })()
    }, [setPosts])

    return (
        <>
           <div>
                {posts.slice(0).reverse().map((post) => {
                    return <SinglePost post={post} key={post._id} user={user}/>
                })}
           </div>
        </>
    )
}

