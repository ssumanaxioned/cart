import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './header.css';
import LoginButton from './LoginButton';
import { useSelector } from 'react-redux';

function Header() {
  const {products} = useSelector(state => state.selectedReducer)
  console.log(products.length);
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <ul>
        <li className='cart'>
          <Link to='/cartitem'>
            <ShoppingCartIcon style={{fontSize: 36}} />
            <p className='number'>{products.length}</p>
          </Link>
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </nav>
  )
}

export default Header
