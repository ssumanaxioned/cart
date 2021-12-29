import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Component/Header';
import Login from './Pages/Login';
import CartItems from './Pages/CartItems';
import ItemDetails from './Pages/ItemDetails'
import { useSelector } from 'react-redux';

// function PrivateRoute({ children, ...rest }) {
//   const { isLogin } = useSelector(state => state.loginReducer)
//   console.log('login', isLogin);
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//          isLogin ? (
//            children
//           ) : (
//             <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }

function App() {
  const { isLogin } = useSelector(state => state.loginReducer)

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/:item' component={ItemDetails} />
          <Route exact path='/cartitem'
            render={({ location }) =>
              isLogin ? (
                <CartItems />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
          );
        </Switch>
      </Router>
    </div>
  );
}

export default App;
