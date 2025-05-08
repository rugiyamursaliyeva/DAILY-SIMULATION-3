import React from 'react'
import styles from '../footer/Footer.module.scss'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <section className={styles.footer}>
        <div className={styles.main}>
        <div className={styles.send}>
            <input type="text" />
            <button>Send Me</button>
        </div>
        <div className={styles.about}>
            <p>About</p>
            <Link>About Us</Link>
            <Link>Our Partnes</Link>
            <Link>Our Servies</Link>
        </div>
        <div className={styles.contact}>
            <p>Contact </p>
            <Link>Contact Us</Link>
            <Link>FAQ Page</Link>
            <Link>About Me</Link>
        </div>
        </div>
    </section>
  )
}

export default Footer