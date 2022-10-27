import React, { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import { useCollection } from '../../hooks/useCollection'

const TransactionForm = ({uid}) => {
  const[name,setName]=useState('')
  const[amount,setAmount]=useState('')
  const {response,addDocument} =useFirestore('transactions')
  const {docs,error,isPending} =useCollection('transactions')

  const handleSubmit=(e)=>{
    e.preventDefault()
     addDocument({name,amount,uid})
  }

  useEffect(()=>{
    if(response.success){
      setAmount('')
      setName('')
    }
  },[response.success])
 

  console.log(docs)
  return (
    <div>
     
        <h3>Add a Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction Name :</span>
                <input type="text" 
                 value={name}
                 required
                 onChange={(e)=>{setName(e.target.value)}}
                />
            </label>
            <label>
                <span>Transaction Amount :</span>
                <input type="number" 
                 value={amount}
                 required
                 onChange={(e)=>{setAmount(e.target.value)}}
                />
            </label>
            <button>Add Transaction</button>

        </form>
    </div>
  )
}

export default TransactionForm