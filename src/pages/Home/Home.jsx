import StatusPost from "../../components/StatusPost/StatusPost"
import Posts from '../../components/Posts/Posts'

export default function Home({user}) {
  return (
    <>
        <StatusPost user={user}/>
        <Posts user={user}/>
    </>
  )
}
