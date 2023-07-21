import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Register from './components/Register';
 function App() {
  return (
    <Router>
     <Navbar/>
    
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Product">
        <Product />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
           
      </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
