import { useState, createContext, useEffect } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'
import Home from '../Home/Home'
import { gapi } from 'gapi-script'
import { GoogleOAuthProvider } from '@react-oauth/google';
import EventsHappening from '../../components/EventsHappening/EventsHappening';

const clientId = '1051610878268-8bl7kndmmufcjarcv9u6h92m3bs1gh11.apps.googleusercontent.com'

export const UserContext = createContext()

export default function App() {

  const [user, setUser] = useState(getUser())
  const [posts, setPosts] = useState([])
  const [position, setPosition] = useState(null)

  const updatePost = (post) => {
    setPosts(post)
  }

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    const crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const start = () => {
    gapi.auth2.init({
      clientId: clientId,
      scope: ""
    })
  }

  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(success, error, options);
    gapi.load('client:auth2', start)
  }, [])

  return (
    <GoogleOAuthProvider clientId="1051610878268-8bl7kndmmufcjarcv9u6h92m3bs1gh11.apps.googleusercontent.com">
      {user ?
        <>
          <UserContext.Provider value={user}>
            <div className='flex flex-row h-screen'>
              <NavBar setUser={setUser} />
              <Routes>
                <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
              </Routes>
              <EventsHappening/>
            </div>
          </UserContext.Provider>
        </>
        :
        <>
          <AuthPage setUser={setUser} />
        </>
      }
    </GoogleOAuthProvider>
  );
}

