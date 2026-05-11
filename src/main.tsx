import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import TopBooks from './top-books'

createRoot(document.getElementById('root')!).render(
  <div>
    <App />
    <br />
    <TopBooks />
  </div>
)
