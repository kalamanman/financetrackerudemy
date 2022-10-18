import { useEffect, useState } from "react"
import { authRef } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin=()=>{
    const [isCancelled,setIsCancelled] =  useState(false)
    const[isPending,setIspending] = useState(false)
    const[error,setError] = useState(null)
                   const{dispatch}      =   useAuthContext()

   const login=async(email,password)=>{
    if(!isCancelled){
    setIspending(true)
    setError(null)
    }
    try{
        const res =await 
               authRef.signInWithEmailAndPassword(email,password)
          
          
        dispatch({type:'LOGIN_USER',payload:res.user})
   
              
             if(!isCancelled) { setIspending(false)}
        
       }
       catch(err){
        if(!isCancelled){
        setError(err.message)
        setIspending(false)
        }
       }
    
   }

   return{error,isPending,login}
   
   useEffect(()=>{
    return ()=>setIsCancelled(true)
   },[])
   


}