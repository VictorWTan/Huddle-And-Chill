import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import { UserContext } from '../../pages/App/App'
import { useContext } from 'react'

export default function NavBar({ setUser }) {

  const user = useContext(UserContext)

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className='mr-52 flex justify-end'>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      Hello, {user.name}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}