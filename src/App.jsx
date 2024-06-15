import React, { createContext, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import Notfound from './components/Notfound';


// Create context for navbar reloading
const NavbarContext = createContext();

const App = () => {
  // State for navbar reloading
  const [reloadNavbar, setReloadNavbar] = useState(false);
  return (
    <NavbarContext.Provider value={{ reloadNavbar, setReloadNavbar }}>
      <>
        <Toaster />
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Dashboard} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/register' Component={Register} />
   
          <Route path='/*' Component={Notfound} />
        
        </Routes>
        <Footer />
      </>
    </NavbarContext.Provider>
  )
}

export default App
// Hook to use navbar context
export const useNavbarContext = () => useContext(NavbarContext);