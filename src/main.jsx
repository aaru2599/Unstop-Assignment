import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterLayout from './Components/Navigation/MyRouter.jsx'

import "/node_modules/bootstrap/dist/js/bootstrap.bundle"

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < RouterLayout/>
  </React.StrictMode>,
)
