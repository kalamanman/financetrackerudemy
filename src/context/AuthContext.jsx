import { createContext, useEffect, useReducer } from "react";
import { authRef } from "../firebase/config";

export const AuthContext = createContext()

export const authReducer =(state,action)=>{
    switch(action.type){
        case 'LOGIN_USER':
           return {...state,user:action.payload}
        case 'LOGOUT_USER' :
            return{...state, user:null}   
        case 'LOGOIN_USER' :
            return {...state, user:payload}   
        case 'AUTH_IS_READY' :
            return{...state,authIsReady:true,user:action.payload} 

        default:
            return state
    }
}

export const AuthContextProvider=({children})=>{

      const  [state,dispatch]= useReducer(authReducer,{
        user:null,
        authIsReady: false
      })
      useEffect(()=>{
        const unsub=authRef.onAuthStateChanged((user)=>{
            dispatch({type:'AUTH_IS_READY',payload:user})
            unsub()
        }
       ) },[])
        
    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            
            {children}
        </AuthContext.Provider>
    )
}