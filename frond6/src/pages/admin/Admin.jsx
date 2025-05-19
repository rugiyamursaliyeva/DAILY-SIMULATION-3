import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductsThunk, getProductsThunk, postProductsThunk } from '../../redux/reducers/productSlice';



const Admin = () => {
  const dispatch = useDispatch()
   const formik = useFormik({
     initialValues: {
       image: '',
       price: '',
       name: '',
       decription: '',
     },
     onSubmit: values => {
       dispatch(postProductsThunk(values))
       dispatch(getProductsThunk())
     },
   });
   const data = useSelector(state => state.product.product)
   const loading = useSelector(state => state.product.loading)
   const error = useSelector(state => state.product.error)

   useEffect(() => {
    dispatch(getProductsThunk())
   }, [])
   if (loading) return <span>Loading...</span>
   if (error) return <span>Xeta bas verdi</span>

   const deleteitem = (id) => {
    dispatch(deleteProductsThunk(id))
   }

  return (
  <div style={{ position: 'relative', zIndex: 1, marginTop: '50px' }}>
  <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price" 
         type="text"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <label htmlFor="name">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
       <label htmlFor="decription">Decription</label>
       <input
         id="decription"
         name="decription"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.decription}
       />
       <button type="submit">Submit</button>
     </form>
     {data && data.map(item => {
      return(
        <div key={item._id}>
          <img src={item.image} alt="" />
          <span>{item.price}</span>
          <span>{item.name}</span>
          <span>{item.decription}</span>
          <button onClick={() => deleteitem(item._id)}>Remove</button>
        </div>
      )
     })}
    </div>
   );
 };

export default Admin