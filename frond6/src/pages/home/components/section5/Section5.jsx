import React from 'react'
import styles from '../section5/Section5.module.scss'
const Section5 = () => {
  return (
    <section className={styles.main}>
         <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.tex1}>
                    <p>$16</p>
                    <span> per table</span>
                </div>
                <div className={styles.text2}>
                    <p>Birthday Events</p>
                    <span>Lorem ipsum dolor sit amet <br /> laudem partem perfecto pe</span>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.tex1}>
                    <p>$16</p>
                    <span> per table</span>
                </div>
                <div className={styles.text2}>
                    <p>Birthday Events</p>
                    <span>Lorem ipsum dolor sit amet <br /> laudem partem perfecto pe</span>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.tex1}>
                    <p>$16</p>
                    <span> per table</span>
                </div>
                <div className={styles.text2}>
                    <p>Birthday Events</p>
                    <span>Lorem ipsum dolor sit amet <br /> laudem partem perfecto pe</span>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section5