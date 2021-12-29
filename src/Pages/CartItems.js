import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Actions';
import './Home.css';
import './cartitem.css';

function CartItems() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.selectedReducer.products)

  const listing = products.map(product => {
    return (
      <div key={product.id} className='item_details'>
        <h2>{product.title}</h2>
        <img src={product.image} alt="item" />
        <div className='details'>
          <p>Price: ${product.price}</p>
          <button onClick={()=>dispatch(removeFromCart(product.id))}>Remove</button>
        </div>
      </div>
    )
  })

  return (
    <div className='cart_items'>
      {listing}
    </div>
  )
}

export default CartItems
