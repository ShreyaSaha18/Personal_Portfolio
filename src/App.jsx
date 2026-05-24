import React from 'react'
import {Navbar} from './layout/Navbar'
import Hero from './sections/Hero';
import About from './sections/About'; 
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Experience from './sections/Experience'; 
import Testimonials from './sections/Testimonials';


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero></Hero>
        <About></About> 
        <Projects></Projects>
        <Experience></Experience>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </main>
      
    </div>
  )
}

export default App
