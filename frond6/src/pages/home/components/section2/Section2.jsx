import React from 'react'
import styles from '../section2/Section2.module.scss'
const Section2 = () => {
  return (
    <section className={styles.main}>
        <div className={styles.second}>
            <div className={styles.mainText}>
                <div className={styles.text}>
                    <p>Our Mission</p>
                    <span>Lorem ipsum dolor sit amet, pri omnium <br /> verterem id, sit labore dicunt an, ea <br /> civibus.</span>
                    <button>Read more</button>
                </div>
            </div>
            <div className={styles.image}>
                <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
            </div>

        </div>

    </section>
  )
}

export default Section2