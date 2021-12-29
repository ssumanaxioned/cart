import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Actions';
import './item.css';

function Item() {
  const { isLoading, data } = useSelector(state => state.apiReducer)
  const dispatch = useDispatch();

  const listing = data.map(product => {
    return (
      <div key={product.id} className='item_details'>
        <h2>{product.title}</h2>
        <img src={product.image} alt="item" />
        <div className='details'>
          <p>Price: ${product.price}</p>
          <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
        </div>
      </div>
    )
  })

  return (
    <>
      {isLoading ? null : listing }
    </>
  )
}

export default Item
