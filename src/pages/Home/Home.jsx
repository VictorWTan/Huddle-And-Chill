import StatusPost from "../../components/StatusPost/StatusPost"
import Posts from '../../components/Posts/Posts'

export default function Home({user, post}) {
  return (
    <>
        <StatusPost user={user}/>
        <Posts user={user} post={post}/>
    </>
  )
}
