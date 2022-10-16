import { useState } from "react"
import { authRef } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup=()=>{

    const[isPending,setIspending] = useState(false)
    const[error,setError] = useState(null)
                   const{dispatch,user}      =   useAuthContext()

   const signup=async(email,password,displayName)=>{
    setIspending(true)
    setError(null)
    try{
        const res =await 
        authRef.createUserWithEmailAndPassword(email,password)
   

       // throw error if signup did not go well
        if(!res){
            throw new Error('Could not create user !!')
        }

        await res.user.updateProfile({displayName:displayName})
          dispatch({type:'LOGIN_USER',payload:res.user})
          
        setIspending(false)
       }
       catch(err){
        setError(err.message)
        setIspending(false)
       }
    
   }
   return{error,isPending,signup}
}