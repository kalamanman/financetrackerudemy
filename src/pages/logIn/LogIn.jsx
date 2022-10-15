import {useState} from 'react'
//styles
import styles from './LogIn.module.css'
 //state
    

const LogIn = () => {

    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')

  return (
    <form className={styles['login-form']}>
        <label>
            <span>Email</span>
            <input type="email" name="email" id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
        </label>
        <label>
            <span>Password</span>
            <input type="password" name="password" id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
        </label>
        <button className=' button'>Login</button>

    </form>
  )
}

export default LogIn