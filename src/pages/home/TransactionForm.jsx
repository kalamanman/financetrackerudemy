import React, { useState } from 'react'

const TransactionForm = () => {
  const[name,setName]=useState('')
  const[amount,setAmount]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log({name,amount})
  }

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