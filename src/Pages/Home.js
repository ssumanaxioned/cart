import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchApiRequest } from '../Actions';
import Item from '../Component/Item';
import './Home.css';

function Home() {
  const dispatch = useDispatch(); 

  useEffect(()=> {
    dispatch(fetchApiRequest())
  }, [dispatch])

  return (
    <div className='home'>
      <Item />
    </div>
  )
}

export default Home
