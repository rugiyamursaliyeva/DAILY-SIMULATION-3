import React, { useEffect } from 'react'
import styles from '../section3/Section3.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../../../redux/reducers/productSlice'



const Section3 = () => {

    const dispatch = useDispatch()

    const data = useSelector(state => state.product.product)
    const loading = useSelector(state => state.product.loading)
    const error = useSelector(state => state.product.error)

    useEffect(() => {
        dispatch(getProductsThunk())
    }, [])

    if (loading) return <span>Loading.. </span>
    if (error) return <span>Probelm Deteced While Loading Process</span>
  return (
    <section className={styles.main}>
        <div className={styles.text}>
            <span>Devoted to wonderful beauty</span>
            <p>Flowers Pricing</p>
        </div>
        <div className={styles.data}>
        <div className={styles.cards}>
          {data && data.map(item => {
            return (
               
              <div className={styles.card}>
                <div className={styles.image}>
                <img src={item.image} alt="" /> 
                </div>
                  
                  <div className={styles.cardText}>
                    <h1>{item.name}</h1>
                    <span>{item.price}</span>
                    <p>{item.decription}</p>    
                  </div>    
              </div>
            )
          }).slice(0,6)}
        </div>
        </div>

    </section>
  )
}

export default Section3