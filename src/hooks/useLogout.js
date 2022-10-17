import { useState } from "react"
import { authRef } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout=()=>{

    const[isPending,setIspending] = useState(false)
    const[error,setError] = useState(null)
                   const{dispatch,user}      =   useAuthContext()

   const logout=async()=>{
    setIspending(true)
    setError(null)
    try{
        if(user){
        const res =await 
        await authRef.signOut()
        dispatch({type:'LOGOUT_USER'})
   

               setIspending(false)
        }
       }
       catch(err){
        setError(err.message)
        setIspending(false)
       }
    
   }
   return{error,isPending,logout}
}