import { useDispatch, useSelector } from "react-redux"
import { deleteWishlistsThunk, getWishlistsThunk } from "../../redux/reducers/wishlistSlice"
import { useEffect } from "react"


const Wishlist = () => {
  const dispatch = useDispatch()

  const deleteitem = async (id) => {
    dispatch(deleteWishlistsThunk(id))
  }
  const data = useSelector(state => state.wishlist.wishlist)
  const loading = useSelector(state => state.wishlist.loading)
  const error = useSelector(state => state.wishlist.error)

     useEffect(() => {
          dispatch(getWishlistsThunk())
      }, [])
  
      if (loading) return <span>Loading...</span>
      if (error) return <span>Probelm Deteced While Loading Process</span>
  
  
  return (
    <div>
      <h1>Wishlist</h1>
      {data && data.map(item => {
        return(
          <div>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => {deleteitem(item._id)}}>Remove</button>
          </div>
        )
      })}
    </div>
  )
}

export default Wishlist