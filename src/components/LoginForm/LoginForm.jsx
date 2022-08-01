// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

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
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="flex flex-col" autoComplete="off" >
          <label className='self-center'>Email</label>
          <input className="px-5 border border-black rounded w-1/4 self-center" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label className='self-center'>Password</label>
          <input className="px-5 border border-black rounded w-1/4 self-center" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button className="my-5 px-5 border border-white rounded w-1/4 self-center" type="submit">LOG IN</button>
        </form>
      </div>
      <GoogleLoginButton setUser={setUser}/>
      <p className="error-message">&nbsp;{error}</p>
    </div>
    </>
  );
}