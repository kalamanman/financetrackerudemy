import {useState} from 'react'
//styles
import styles from './SignUp.module.css'
const SignUp = () => {

    const[displayName,setDisplayName] =useState('')
    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(displayName,email, password)
    }


  
   
  return (
    <form className={styles['signup']}
     onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
            <span>Display Name</span>
            <input type="text" name="displayName" id="email"
              value={displayName}
              onChange={(e)=>setDisplayName(e.target.value)}
            />
        </label>
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
        <button className=' button'>Signup</button>
        </form>
  )
}

export default SignUp