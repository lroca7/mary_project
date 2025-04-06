import '../src/styles/main.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  // Usar variable de entorno para el número de teléfono
  // Con un respaldo en caso de que no esté definida
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER || "+573215050468";
  
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
      <WhatsAppButton phoneNumber={whatsappNumber} message="Hola ..." />
    </div>
  )
}

export default App
