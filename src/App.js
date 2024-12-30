import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Discover from './components/Discover'
import Info from './components/Info'
import Quality from './components/Quality'
import Inspire from './components/Inspire'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <Discover/>
      <Info/>
      <Quality/>
      <Inspire/>
      <Footer/>
    </div>
  )
}

export default App
