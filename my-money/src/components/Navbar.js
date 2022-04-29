import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const { logout } = useLogout()

  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        <li><Link to='/login'>Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>

        <li>
          <button className='btn' onClick={logout}>Log Out</button>
        </li>
      </ul>
    </div>
  )
}
