import DisplayProject from './DisplayProject';
import Home from './Home';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Support from './Support';
import Skills from './Skills';
import ContactMe from './ContactMe';
import DisplayProject1 from './DisplayProject1';
import DisplayProject2 from './DisplayProject2';
import DisplayProject3 from './DisplayProject3';
import Terminaly from './Terminaly';
import RedirectTerminal from './RedirectTerminal';
import Weatherapps from './Weatherapps';
import usePreventZoom from './Disablezoom'



function App() {
usePreventZoom();
    return <>
    
    <Router>     
           <Routes>
           <Route path="/" element={<Home/>}></Route>  
           <Route path="/Project" element={<DisplayProject/>}></Route>
           <Route path="/Project1" element={<DisplayProject1/>}></Route> 
           <Route path="/Project2" element={<DisplayProject2/>}></Route> 
           <Route path="/Project3" element={<DisplayProject3/>}></Route> 
           <Route path="/support" element={<Support/>}></Route>  
           <Route path="/skills" element={<Skills/>}></Route>  
           <Route path="/ContactMe" element={<ContactMe/>}></Route>  
           <Route path="/Terminal" element={<Terminaly/>}></Route>  
             <Route path="/redtoTerminal" element={<RedirectTerminal/>}></Route>  
             <Route path="/weather-apps" element={<Weatherapps/>}></Route>  
      </Routes>
    </Router>
    </>
 
}

export default App;
