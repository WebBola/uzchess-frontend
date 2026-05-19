import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './Nav'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div>
      <Navbar />
      <App />
      <Footer />
    </div>
  </BrowserRouter>
)
