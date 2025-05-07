import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


let obj = {
  name: "nihal",
  age: 20,
  channel: "nihalaurcode",
  isStudent: true,
  isActive: false,
  skills: ["html", "css", "js"],
  address: {
    city: "delhi",
    state: "delhi",
    country: "india"
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App username="Nihal Nughman" someobj={obj} />
    <App newarr={arr} username="Nihal Raza" intro="Software Developer" />
    <App username="nihalaurcode" intro="Developer" />
  </StrictMode>,
)