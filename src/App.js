import './App.css';
import Header from './Components/Nav/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Screens/Home/Home';
import About from './Components/Screens/About/About';
import Contact from './Components/Screens/Contact/Contact';

function App() {
  return (
    <>
        
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    </>
    
  );
}

export default App;
