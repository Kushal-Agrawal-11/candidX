import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing pages and components
import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';
import Signup from './screens/Signup';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element= {<Home />}></Route>
          <Route path='/about' element= {<About />}></Route>
          <Route path='/login' element= {<Login />}></Route>
          <Route path='/signup' element= {<Signup />}></Route>
          

        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
