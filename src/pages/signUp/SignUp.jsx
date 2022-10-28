import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup'
//styles
import styles from './SignUp.module.css'
const SignUp = () => {

    const[displayName,setDisplayName] =useState('')
    const[email,setEmail] =useState('')
    const[password,setPassword] =useState('')
     //useSignup hook
     const {error,isPending,signup} =useSignup()
     //submitting the form
    const handleSubmit=(e)=>{
        e.preventDefault()
        signup(email,password,displayName)
    }


  
   
  return (
    <form className={styles['signup']}
     onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <label>
            <span>Display Name</span>
            <input type="text" name="displayName" id="email"
              value={displayName}
              required
              onChange={(e)=>setDisplayName(e.target.value)}
            />
        </label>
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
        </label>{
          isPending?
            <button className=' button btn disabled'>wait is loading</button>
            : <button className='button'>Signup</button>
        }
        
      
           

        {error &&<div>{error}</div> }
        </form>
  )
}

export default SignUp