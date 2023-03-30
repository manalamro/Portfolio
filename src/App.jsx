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
import Experprovider from './components/providers/experProvider'
const App = ()=>{
 return(
 <>
 <Experprovider>
 <Header/>
 <Navbar/>
 <About/>
 <Experience/>
 <Service/>
 <Portfolio/>
 {/* <Testimonials/> */}
 <Contact/>
 <Footer/>
 </Experprovider>
 </>

 )

}
export default App