import {useState,useEffect} from 'react'
import { storeRef } from '../firebase/config'
export const useCollection =(collection)=>{
    const[docs,setDocs]=useState([])
     const[error,setError]=useState(null)
     const [isPending,setIsPending]=useState(false)

    useEffect(()=>{
const ref = storeRef.collection(collection)
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
    },[collection])
    return {docs,error,isPending}
}