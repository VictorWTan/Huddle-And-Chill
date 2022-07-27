import StatusPost from "../../components/StatusPost/StatusPost"
import Posts from '../../components/Posts/Posts'

export default function Home({post}) {
  return (
    <>
        <StatusPost />
        <Posts post={post}/>
    </>
  )
}
