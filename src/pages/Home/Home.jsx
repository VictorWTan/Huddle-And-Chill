import StatusPost from "../../components/StatusPost/StatusPost"
import Posts from '../../components/Posts/Posts'
import { useState } from 'react'

export default function Home({posts, setPosts}) {
  return (
    <div className="flex flex-col w-1/3">
        <StatusPost />
        <Posts posts={posts} setPosts={setPosts}/>
    </div>
  )
}
