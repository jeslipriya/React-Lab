import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import About from './About' 
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="grow">
        <About />
      </main>
      
      
      <Footer />       
    </div>
  </StrictMode>,
)
