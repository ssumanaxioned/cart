export const fetchApiRequest =()=> {
  return {
    type: 'FETCH_API_REQUEST'
  }
}

export const addToCart =(data)=> {
  return {
    type: 'ADD_TO_CART', 
    payload: data
  }
}

export const removeFromCart =(id)=> {
  return {
    type: 'Remove_FROM_CART',
    payload: id
  }
}

export const login =(user)=> {
  return {
    type: 'LOGIN',
    payload: user
  }
}

export const logout =()=> {
  return {
    type: 'LOGOUT'
  }
}