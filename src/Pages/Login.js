import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router'
import { login } from '../Actions';

function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleUsername = e => {
    setUser(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  const handleOnSubmit =e=> {
    e.preventDefault();
    if(user === 'suman' && password === '12345') {
      dispatch(login(user));
      history.replace(from)
  }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="user">
        <input id='user' name='user' type="text" onChange={handleUsername} />
      </label>
      <label htmlFor="password">
        <input id='password' name='password' type="password" onChange={handlePassword} />
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}

export default Login
