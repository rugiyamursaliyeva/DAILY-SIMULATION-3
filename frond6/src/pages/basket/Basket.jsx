import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketsThunk, getBasketsThunk } from '../../redux/reducers/basketSlice'

const Basket = () => {
    const dispatch = useDispatch()
       const deleteitem = async (id) => {
        dispatch(deleteBasketsThunk(id))
       }
    const data = useSelector(state => state.basket.basket)
    const loading = useSelector(state => state.basket.loading)
    const error = useSelector(state => state.basket.error)

    useEffect(() => {
     dispatch(getBasketsThunk())
    }, [])

    if (loading) return <span>Loading...</span>
    if (error) return <span>Xeta bas verdi</span>
       

  return (
    <div>
        <h1>Basket</h1>
        {data && data.map(item => {
            return(
                <div key={item._id}>
                    <img src={item.image} alt="" />
                    <span>{item.price}</span>
                    <span>{item.name}</span>
                    <span>{item.decription}</span>
                    <button onClick={() => {deleteitem(item._id)}}>Remove</button>
                </div>
            )
        })}
    </div>
  )
}

export default Basket