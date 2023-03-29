import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from '@chakra-ui/react'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className='logo'>
                <Link to='/'>eCommerce</Link>
            </div>

            <ul className={styles.menu}>
              <li>
                <Link to='/'>Products</Link>
              </li>
            </ul>
        </div>

        <div className={styles.right}>
          <Link to='/login'><Button colorScheme='blue'>Login</Button></Link>
          <Link to='/register'><Button colorScheme='blue'>Register</Button></Link>
        </div>  
    </nav>
  )
}
