import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import React, {useState} from 'react';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from'./pages/Dashboard';
import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/login" element= {<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element= {<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element= {<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
