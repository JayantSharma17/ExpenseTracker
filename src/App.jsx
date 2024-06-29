import React, { createContext, useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import Notfound from './components/Notfound';
import AllCards from './components/AllCards';
import AddProduct from './components/AddProduct';


// Create context for navbar reloading 
// hii
//hello
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
          <Route exact path='/addproduct' Component={AddProduct} />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/cards' Component={AllCards} />
   
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