import React from 'react'
import{useCollection} from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import TransactionForm from './TransactionForm'
import TransactionsList from './TransactionsList'
//styles
import styles from './Home.module.css'

const Home = () => {
  const {user} =useAuthContext()
  const uid= user.uid
  const {docs,error,isPending} =useCollection('transactions',
  ["uid","==",user.uid],["createdAt","desc"])
  console.log(docs)
 
  
  return (
    <div className={styles.container}>
      <section className={styles.content}>
       {docs && <TransactionsList transactions={docs}/>}
      </section>
      <section className={styles.side} >
        <TransactionForm uid={uid}/>
        <ul className="aside">
          <li>
            <p className="name">{}</p>
            <p className="amount">{}</p>
          </li>
        </ul>
      </section>

    </div>
  )
}

export default Home