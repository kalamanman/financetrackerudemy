import {useState} from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogin } from '../../hooks/useLogin'
//styles
import styles from './LogIn.module.css'
 //state
    

const LogIn = () => {

    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')
    const{error,isPending,login} = useLogin()
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        login(email, password)
    }

  return (

    <form className={styles['login-form']}
    
     onSubmit={handleSubmit}
    >
        <h2>Login</h2>
        <label>
            <span>Email</span>
            <input type="email" name="email" id="email"
              value={email}
              required
              onChange={(e)=>setEmail(e.target.value.toLowerCase())}
            />
        </label>
        <label>
            <span>Password</span>
            <input type="password" name="password" id="password"
              value={password}
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
        </label>
        {isPending ?
        <button className=' button disabled'>Loading.. wait!</button>:
        <button className=' button '>Login</button>}
        {error && <p>{error}</p> }

    </form>
  )
}

export default LogIn