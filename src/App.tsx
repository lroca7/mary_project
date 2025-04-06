import '../src/styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import AboutPage from './pages/AboutPage'

function App() {
  // Usar variable de entorno para el número de teléfono
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER || "+573215050468";
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <Header />
            <Main />
            <Footer />
            <WhatsAppButton phoneNumber={whatsappNumber} message="Hola ..." />
          </div>
        } />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
