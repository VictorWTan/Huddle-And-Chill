// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const [signInClick, setSignInClick] = useState(false)

  const onSignInClick = () => {
    if (!signInClick) setSignInClick(true)
    else setSignInClick(false)
  }

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      onSignInClick()
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='flex flex-col'>
      <span className='font-bold flex justify-center self-center mr-12'>Already have an account?</span>
      {!signInClick ?
      <button className="my-5 px-5 py-2 border border-gray-700 rounded-3xl w-1/3 justify-center self-center hover:scale-105 duration-300 text-sky-600" onClick={onSignInClick}>Sign In</button>
        :
      <div className="mt-6 flex flex-col" onSubmit={handleSubmit}>
          <form className="flex flex-col" autoComplete="off" >
            <input className="m-2 px-5 py-2 border border-gray-600 rounded-lg w-1/3 self-center bg-black" placeholder="Email" type="text" name="email" value={credentials.email} onChange={handleChange} required />
            <input className="m-2 px-5 py-2 border border-gray-600 rounded-lg w-1/3 self-center bg-black" placeholder="Password" type="password" name="password" value={credentials.password} onChange={handleChange} required />
            <button className="my-5 px-5 py-2 border border-gray-700 rounded-3xl w-1/3 self-center hover:scale-105 duration-300 text-sky-600" type="submit">Sign In</button>
          </form>
      </div>
      }
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}