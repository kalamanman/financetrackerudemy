import React from 'react'
//styles
import styles from './Home.module.css'
import TransactionForm from './TransactionForm'
const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        content
      </section>
      <section className={styles.side} >
        <TransactionForm/>
        <ul className="aside">
          <li></li>
        </ul>
      </section>

    </div>
  )
}

export default Home