
import {useEffect,useReducer,useState} from 'react'
import { timestamp } from '../firebase/config'
import { storeRef } from '../firebase/config'
const initialState = {
    document : null,
    isPending : false,
    error : null,
    success : null
 }
 const firestoreReducer =(state,action)=>{
    switch(action.type){
        case 'ADDED_DOCUMENT':
            return {...state,success:true,isPending:false,
                    error:null,document:action.payload}
        case 'IS_PENDING':
            return{...state,isPending:true,error:null,success:false}
        case 'ERROR' :
            return{...state,error:action.payload,
                success:false,isPending:false}   
                default:
                    return {...state}
    }
 }
export const useFirestore = (collection) => {
    const [response,dispatch] = useReducer(firestoreReducer,initialState)
    const [isCancelled,setIsCancelled] =useState(false)
    console.log('response :',response)

    const dispatchIfNotCancelled =(action)=>{
        if(!isCancelled)
        {dispatch(action)}
    }
 
     const ref=storeRef.collection(collection)
   //Add a document
   const addDocument = async(doc)=>{
        dispatch({type:'IS_PENDING' })
    try{
        const createdAt =timestamp.fromDate(new Date())
        const addedDocREf = await ref.add({...doc,createdAt})
        dispatch({type:'ADDED_DOCUMENT',payload:addedDocREf})

    }
    catch(err){
        dispatch({
            type:'ERROR',payload:err.message
        })
    }

   }


   //Delete a document

   const deleteDocument =async (id)=>{

   }



    
    useEffect(()=>{
        return ()=> setIsCancelled(true)
    },[])
    return {response,addDocument,deleteDocument}

}
