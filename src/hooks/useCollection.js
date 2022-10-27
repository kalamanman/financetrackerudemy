import {useState,useEffect} from 'react'
import { storeRef } from '../firebase/config'
export const useCollection =(collection)=>{
    const[docs,setDocs]=useState([])
    console.log(docs)

    useEffect(()=>{
const ref = storeRef.collection(collection)
const unsub =ref.onSnapshot((snapshot)=>{
   let results =[]
   snapshot.docs.forEach(doc=>
    results.push({...doc.data(),id:doc.id})
    )
    setDocs(results)
},(err)=>{
    console.log(err.message)
    
})
return ()=> unsub()
    },[collection])
    return {docs}
}