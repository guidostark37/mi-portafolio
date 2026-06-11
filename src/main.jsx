import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TagManager from 'react-gtm-module'; // 1. Importa el módulo
import './index.css'
import App from './App.jsx'

// 2. Inicializa con tu ID exacto
const tagManagerArgs = {
    gtmId: 'GTM-5TWJT8B8'
}
TagManager.initialize(tagManagerArgs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)