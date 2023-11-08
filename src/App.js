import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AboutMe from './components/aboutMe/AboutMe';
import CommButton from './components/commButtons/CommButtons';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import ScrollToTopProvider from './context/ScrollToTopContext';

function App () {

  return (
    <BrowserRouter basename='/TranslatorLandingPage'>
      <NavBar/>
      <CommButton/>
      <ScrollToTopProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutme' element={<AboutMe/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </ScrollToTopProvider>
    </BrowserRouter>
  )
}

export default App;