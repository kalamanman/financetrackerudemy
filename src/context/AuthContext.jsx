import { createContext, useReducer } from "react";

export const AuthContext = createContext()

export const authReducer =(state,action)=>{
    switch(action.type){
        case 'LOGIN_USER':
           return {...state,user:action.payload}
        case 'LOGOUT_USER' :
            return{...state, user:null}   
        case 'LOGOIN_USER' :
            return {...state, user:payload}   

        default:
            return state
    }
}

export const AuthContextProvider=({children})=>{

      const  [state,dispatch]= useReducer(authReducer,{
        user:null
      })
         console.log('The state :',state)
    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            
            {children}
        </AuthContext.Provider>
    )
}