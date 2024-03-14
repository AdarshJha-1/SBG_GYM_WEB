import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Plans from './pages/Plans.tsx'
import Dashboard from './pages/Dashboard.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/plans',
        element: <Plans/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
