import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Apartment from './pages/Apartment'
import Error from './pages/Error'
import Infos from './pages/Infos'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    {/* paths of the various pages */}
    <Router basename="/Projet8-kasa">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartment/:id" element={<Apartment />} />
        <Route path="/infos" element={<Infos />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/404" element={<Error />} />
        {/* trick to allow an Error page on GitHub Pages (with some JavaScript linked to index.html) */}
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
