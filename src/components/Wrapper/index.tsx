import React from 'react'
import Footer from '../Footer'
import Header from '../Header'


function Wrapper({children}:any) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Wrapper