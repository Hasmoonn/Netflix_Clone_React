import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { logIn, signUp } from '../../firebase.js'
import { useNavigate } from 'react-router-dom'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)

  const userAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (signState === 'Sign In') {
      await logIn(email, password)
    } else {
      await signUp(name, email, password)
    }

    setLoading(false)
  }

  return (

    loading ? 
    <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> 
    :
    <div className='login'>
      <img src={logo} alt="" className='login-logo' onClick={() => navigate('/')} />
      <div className="login-form">
        <h1>
          {signState === 'Sign In' ? "Sign In" : "Sign Up"}
        </h1>

        <form>   
          {
            signState === "Sign Up" ? 
            <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} /> 
            : <></>
          }

          <input type="email" placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <button onClick={userAuth} type='submit'>
            {signState === 'Sign In' ? "Sign In" : "Sign Up"}
          </button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id='checkbox' />
              <label htmlFor="checkbox">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {
            signState === "Sign In" 
            ? <p>New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p> 
            : <p>Already have account <span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>}    
        </div>
      </div>
    </div>
  )
}

export default Login