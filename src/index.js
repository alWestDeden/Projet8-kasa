import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// import Apartment from './pages/Apartment'
import Error from './pages/Error'
import Infos from './pages/Infos'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/Projet8-kasa">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/apartment/:id" element={<Apartment />} /> */}
        <Route path="/infos" element={<Infos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
