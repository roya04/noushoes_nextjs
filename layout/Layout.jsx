import React from 'react'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'
const Layout = ({children}) => {
  return (
    <React.Fragment>
    <Header/>
    {children}
    <Footer/>
    </React.Fragment>
  )
}

export default Layout