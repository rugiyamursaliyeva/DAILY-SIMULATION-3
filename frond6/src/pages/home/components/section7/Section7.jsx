import React from 'react'
import styles from '../section7/Section7.module.scss'

const Section7 = () => {
  return (
    <section className={styles.cards}>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
            </div>
            <div className={styles.text}>
                <p>Velva Kopf</p>
                <span>Biologist</span>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg" alt="" />
            </div>
            <div className={styles.text}>
                <p>Velva Kopf</p>
                <span>Biologist</span>
            </div>
        </div>
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
            </div>
            <div className={styles.text}>
                <p>Velva Kopf</p>
                <span>Biologist</span>
            </div>
        </div>

    </section>
  )
}

export default Section7