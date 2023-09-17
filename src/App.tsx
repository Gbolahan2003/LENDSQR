import React from 'react';

import './App.css';
import Login from './LoginPage/Login';
import {Routes, Route} from 'react-router-dom'
import {AuthProvider} from './Components/Auth';
import Home from './home/Home';
import UserDetails from './Userdetails/UserDetails';
import { AnimatePresence } from "framer-motion";
import {User} from './UserInterface';
function App() {

  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    // Fetch user data from your API here
    const url = 'https://run.mocky.io/v3/42687199-64ae-4f4d-ba9d-5ab0196bfcce';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
   <AnimatePresence mode='wait'>
     <AuthProvider>
      <div className="App"> 
      
      <Routes>
       <Route path='/' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
   
        <Route path='/userdetails/:id' element={<UserDetails users={users}/>}/>
      </Routes>
     </div>
    </AuthProvider>
   </AnimatePresence>
  );
}

export default App;
