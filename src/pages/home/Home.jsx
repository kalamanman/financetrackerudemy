import React from 'react'
import{useCollection} from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import TransactionForm from './TransactionForm'
import TransactionsList from './TransactionsList'
//styles
import styles from './Home.module.css'

const Home = () => {
  const {user} =useAuthContext()
  const {docs,error,isPending} =useCollection('transactions')
  console.log(docs)
 
  const uid= user.uid
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