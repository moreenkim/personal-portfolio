import React from 'react';
import { Box } from '@chakra-ui/react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import ConsoleGallery from './sections/ConsoleGallery';
import Contact from './sections/Contact';
import Experience from './sections/Experience'
import Footer from './components/Footer';

function App() {

  console.log(Home, About, Skills, Projects, ConsoleGallery, Contact);
  return (
    <Box>
    <Navbar />
    <Box as="main" mt="60px">
      <Box as="section" id="home"><Home /></Box>
      <Box as="section" id="about"><About /></Box>
      <Box as="section" id="skills"><Skills /></Box>
      <Box as="section" id="experience"><Experience /></Box>
      <Box as="section" id="projects"><Projects /></Box>
      {/* <Box as="section" id="console"><ConsoleGallery /></Box> */}
      <Box as="section" id="contact"><Contact /></Box>
    </Box>
    <Footer/>
  </Box>
  );
}

export default App;
