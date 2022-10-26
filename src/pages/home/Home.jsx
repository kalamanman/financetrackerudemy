import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
//styles
import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
const Home = () => {
  const {user} =useAuthContext()
  const uid= user.uid
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        content
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