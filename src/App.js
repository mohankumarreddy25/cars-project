import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/login';
import Services from './components/Services';
function App(){    
        return(
            <div className='App'>                
                <BrowserRouter>
                <Header />
                <Routes> 
                    <Route exact path='/' element={<Login />} />
                    <Route exact path='/Home' element={<Home />}/>                   
                    <Route exact path='/About' element={<About />}/>
                    <Route exact path='/Contact' element={<Contact />}/>
                    <Route exact path='/Services' element={<Services/>}/>                    
                 </Routes>
                </BrowserRouter>
            </div>
        )
    }
    export default App;