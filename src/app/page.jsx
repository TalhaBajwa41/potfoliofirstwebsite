import React from 'react'
import Home from './home/page'
import AboutPage from './about/page'
import Header from './components/Header'


function page() {
  return (
    <div>
      <Home />
      <AboutPage />
      <Header />

    </div>
  )
}

export default page
