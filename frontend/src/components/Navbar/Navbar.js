import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import { Button } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext';
import { useBasket } from '../../contexts/BasketContext';

export default function Navbar() {

  const { loggedIn, logout } = useAuth();
  const { items } = useBasket();
  const navigate = useNavigate();
    const handleLogOut = async () => {
        await logout();
        navigate('/');
    };

  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className={styles.logo}>
                <Link to='/'>eCommerce</Link>
            </div>

            <ul className={styles.menu}>
              <li>
                <Link to='/products'>Products</Link>
              </li>
            </ul>
        </div>

        <div className={styles.right}>
          {!loggedIn && (
            <>
              <Link to='/login'><Button colorScheme='blue'>Login</Button></Link>
              <Link Link to='/register'><Button colorScheme='red'>Register</Button></Link>
            </>
          )}
          {loggedIn && (
            <>
              {items?.length > 0 && (
                <Link to='/basket'><Button colorScheme='gray'>Basket: {items.length}</Button></Link>
              )}
              <Link to='/profile'><Button colorScheme='gray'>Profile</Button></Link>
              <Link to='/logout'><Button colorScheme='gray' onClick={handleLogOut}>Logout</Button></Link>
              </>
          )}
        </div>  
    </nav>
  )
}
