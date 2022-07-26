import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'
import Home from '../Home/Home'

export default function App() {

  const [user, setUser] = useState(getUser())
  const [post, setPost] = useState('')

  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home post={post} setPost={setPost} user={user}/>}/>
        </Routes>
      </>
        : 
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

