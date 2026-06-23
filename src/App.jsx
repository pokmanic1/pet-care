import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './pages/index'
import Booking from './pages/booking'
import Contact from './pages/contact'
import Service from './pages/service'
import Team from './pages/team'
import Tips from './pages/tips'
import Conecteazate from './pages/conecteazate'
import Inregistreazate from './pages/inregistreazate'

function App() {
  return (
    <BrowserRouter basename="/pet-care">
    <Header/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/conecteazate" element={<Conecteazate />} />
        <Route path="/inregistreazate" element={<Inregistreazate />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
