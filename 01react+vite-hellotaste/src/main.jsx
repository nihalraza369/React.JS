import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


/*
createRoot(document.getElementById('root')).render(
    App()
)
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
//=====================================================DAY02==========================================

const another= React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'visit google'
)
  

createRoot(document.getElementById('root')).
render(
  <StrictMode>
    {another}
  </StrictMode>
)*/