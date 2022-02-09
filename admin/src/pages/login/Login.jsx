import { useContext } from 'react';
import { useState } from 'react';
import { login } from '../../contest/authContext/apiCalls';
import { AuthContext } from '../../contest/authContext/AuthContext';
import './login.css';

export default function Login() {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        login({email,password}, dispatch)
    }

  return <div className='login'>
      <form  className="loginForm">
          <input type="text" placeholder='email' className='loginInput' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='password' className='loginInput' onChange={(e) => setPassword(e.target.value)} />
          <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>
      </form>
  </div>;
}
