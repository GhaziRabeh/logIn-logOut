import React, {useContext} from 'react'

import { AuthContext } from './AuthProvider';

const LoginButton = () => {

    const { login, isAuthenticated } = useContext(AuthContext);
  
    return (
    <button onClick={login} disabled={isAuthenticated}>
    {isAuthenticated ? 'Logged In' : 'Log In'}
  </button>
  )
}

export default LoginButton