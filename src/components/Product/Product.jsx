import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductAction } from '../../redux/actions/ProductAction'

function Product() {

  const getProduct = useSelector((state) => state.products )

  const dispach = useDispatch()

  console.log(getProduct);

  useEffect(() => {
    dispach(GetProductAction())
  },[])



  return (

   
    <div>Product</div>
  )
}

export default Product