import React from 'react'
import Header from './components/header/header'
import Navbar from './components/nav/nav'
import About from './components/about/about.component'
import Experience from './components/experience/experience'
import Service from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const App = ()=>{
 return(
 <>
 <Header/>
 <Navbar/>
 <About/>
 <Experience/>
 <Service/>
 <Portfolio/>
 <Testimonials/>
 <Contact/>
 <Footer/>
 </>

 )

}
export default App