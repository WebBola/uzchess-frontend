import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Navbar from './Nav'
import Footer from './Footer'

createRoot(document.getElementById('root')!).render(
  <div>
    <Navbar />
    <App />
    <Footer />
  </div>
)
