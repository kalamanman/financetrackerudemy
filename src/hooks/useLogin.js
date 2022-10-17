import { useState } from "react"
import { authRef } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin=()=>{

    const[isPending,setIspending] = useState(false)
    const[error,setError] = useState(null)
                   const{dispatch}      =   useAuthContext()

   const login=async(email,password)=>{
    setIspending(true)
    setError(null)
    try{
        const res =await 
               authRef.signInWithEmailAndPassword(email,password)
        
        dispatch({type:'LOGIN_USER',payload:res.user})
   

               setIspending(false)
        
       }
       catch(err){
        setError(err.message)
        setIspending(false)
       }
    
   }
   return{error,isPending,login}
}