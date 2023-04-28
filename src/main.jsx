import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { Agenda } from './Agenda/Agenda'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Agenda />
  </React.StrictMode>,
)
