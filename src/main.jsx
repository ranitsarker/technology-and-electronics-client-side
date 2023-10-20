import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCustomRoute from './Routers/Mainrouter'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { DarkModeProvider } from './DarkModeContext/DarkModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DarkModeProvider>
        <RouterProvider router={myCustomRoute}></RouterProvider>
        <Toaster /> 
      </DarkModeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
