import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HeaderFooterWrapper = ({children}) => {
  return (
   <>
   <Header/>
   {children}
   <Footer/>
   </>
  )
}

export default HeaderFooterWrapper
