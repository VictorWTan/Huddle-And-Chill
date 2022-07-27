import StatusPost from "../../components/StatusPost/StatusPost"
import Posts from '../../components/Posts/Posts'
import { useState } from 'react'

export default function Home({posts, setPosts}) {
  return (
    <>
        <StatusPost />
        <Posts posts={posts} setPosts={setPosts}/>
    </>
  )
}
