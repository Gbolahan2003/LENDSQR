import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './LoginPage/Login';
import {Routes, Route} from 'react-router-dom'
import {AuthProvider} from './Components/Auth';
import Home from './home/Home';
import UserDetails from './Userdetails/UserDetails';
import UserDetailsContainer from './Userdetails/UserDetailsContainer';
import { AnimatePresence } from "framer-motion";
import {User} from './UserInterface';
function App() {

  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    // Fetch user data from your API here
    const url = 'https://run.mocky.io/v3/afbe6ec2-cae7-48e7-8d7f-8e2a4376c3c2';
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
