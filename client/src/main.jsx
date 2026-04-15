
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <ScrollToTop/>
    <AppProvider>
      <App />
    </AppProvider>
    
    </BrowserRouter>
    
  ,
)
