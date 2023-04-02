import React from 'react'
import Header from './components/header/header'
import Navbar from './components/nav/nav'
import About from './components/about/about.component'
import Experience from './components/experience/experience'
import Service from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Experprovider from './components/providers/experProvider'
import Serviceprovider from './components/providers/serviceprovider'
import PortofoiloProvider from './components/providers/portfoiloProvider'

const App = ()=>{
 return(
 <>

 <Serviceprovider>
 <Experprovider>
 <PortofoiloProvider>
 <Header/>
 <Navbar/>
 <About/>
 <Experience/>
 <Service/>
 <Portfolio/>
 <Contact/>
 <Footer/>
 </PortofoiloProvider>
 </Experprovider>
 </Serviceprovider>


 </>

 )

}
export default App