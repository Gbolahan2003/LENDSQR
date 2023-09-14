import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './LoginPage/Login';
import {Routes, Route} from 'react-router-dom'
import {AuthProvider} from './Components/Auth';
import Home from './home/Home';
function App() {
  return (
    <AuthProvider>
      <div className="App"> 
      
      <Routes>
       <Route path='/' element={<Login/>}/>
      <Route path='home' element={<Home/>}>
 </Route>
      </Routes>
     </div>
    </AuthProvider>
  );
}

export default App;
