import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Use BrowserRouter for web applications
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Try from './components/try';
function App() {
  return (
    <Router>
    <Try name="Ali"/>
    <Navbar/>
    <Login/>  
    <Footer/>
    </Router>
  );
}

export default App;
