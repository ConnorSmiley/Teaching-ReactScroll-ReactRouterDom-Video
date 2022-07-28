import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page4 from './pages/Page4'
import Page3 from './pages/Page3'
import Page5 from './pages/Page5'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div >
      <Navbar />
      <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path='/page5' element={<Page5 />} />
      </Routes>
    </div>
  )
}

export default App


