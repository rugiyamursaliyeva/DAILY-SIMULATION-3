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
            <Link to={'/about'}>About us</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
            <Link to={'/pricing'}>Pricing</Link>
            <Link to={'/contacts'}>Contacts</Link>
        </div>
        <FaBars className={styles.bars}/>
    </section>
  )
}

export default Header