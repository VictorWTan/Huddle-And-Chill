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
    <nav className="flex flex-col w-1/3">
      <Link to="/" className="self-center ml-32 bg-contain bg-no-repeat bg-[url('../assets/295224-200.png')] h-20 text-transparent">
         Some Text
      </Link>
      <div className="self-center ml-32 mt-10" >Hello, {user.name}</div>
      <Link to="" className="flex justify-center ml-32 my-5 px-5 py-2 border border-gray-700 rounded-3xl w-1/3 self-center hover:scale-105 duration-300 text-sky-600" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}