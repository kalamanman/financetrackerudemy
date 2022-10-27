import {useState,useEffect, useRef} from 'react'
import { storeRef } from '../firebase/config'
export const useCollection =(collection,_query)=>{
    const[docs,setDocs]=useState([])
     const[error,setError]=useState(null)
     const [isPending,setIsPending]=useState(false)
   const uidEqualsUserId =useRef(_query).current

 console.log(uidEqualsUserId)
    useEffect(()=>{
let ref = storeRef.collection(collection)
if(uidEqualsUserId){
    ref=ref.where(...uidEqualsUserId )
}
const unsub =ref.onSnapshot((snapshot)=>{
    setIsPending(true)
   let results =[]
   snapshot.docs.forEach(doc=>
    results.push({...doc.data(),id:doc.id})
    )
    setDocs(results)
    setError(null)
    setIsPending(false)
},(err)=>{
    console.log(err.message)
    setError(err.message)
    
})
return ()=> unsub()
    },[collection,uidEqualsUserId])
    return {docs,error,isPending}
}