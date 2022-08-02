import * as postsAPI from '../../utilities/posts-api'
import { useEffect, useState } from 'react'
import SinglePost from '../SinglePost/SinglePost'

export default function Posts({user, posts, setPosts}) {

    useEffect(() => {
        (async () => {
            const allPosts = await postsAPI.getAll()
            setPosts(allPosts)
        })()
    }, [setPosts, posts])

    return (
        <>
           <div className='flex flex-col justify-center'>
                {posts.slice(0).reverse().map((post) => {
                    return <SinglePost post={post} key={post._id} user={user}/>
                })}
           </div>
        </>
    )
}

