import React from 'react'
import styles from '../header/Header.module.scss'
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router'
const Header = () => {
  return (
    <section className={styles.header}>
        <div className={styles.logo}>
            <p>Floral Studio</p>
        </div>
        <div className={styles.navs}>
            <Link to={'/'}>Home</Link>
            <Link to={'/admin'}>Admin</Link>
            <Link to={'/basket'}>Basket</Link>
            <Link to={'/wish'}>Wishlist</Link>
            <Link to={'/contacts'}>Contacts</Link>
        </div>
        <FaBars className={styles.bars}/>
    </section>
  )
}

export default Header