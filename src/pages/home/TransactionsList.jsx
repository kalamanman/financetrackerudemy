import React from 'react'
//styles
import styles from './Home.module.css'

const TransactionsList = ({transactions}) => {
  return (
        <ul className ={styles.transactions}>
         { transactions.map(transaction=>(
            <li key={transaction.id}>
                <span className={styles.name} >{transaction.name} </span>
                
                <span className={styles.amount} >$ {transaction.amount}</span>
            
                <button>X</button>
            </li>

          ))}


        </ul>

        
        )
 
  
}

export default TransactionsList