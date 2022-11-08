
import {Link} from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogout'
//styles
import styles from './Navbar.module.css'
     

const Navbar = () => {
         const {user}           = useAuthContext()
    const{logout} = useLogout()
  return (
    <nav  className={styles.navbar}>
        <ul>
            <li className={styles.title}>myMoney<span>BY K Newman &copy;</span></li>
            { !user ?
              (<>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            </>):
            (<>
              <li>Hello {user.displayName}</li>
            <li> <button  className='btn button'
            onClick={logout}
            >Logout</button> </li>
            </>)
       }
        </ul>

    </nav>
  )
}

export default Navbar