import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Main from './layout/Main.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
    </RouterProvider>
    <Toaster 
    reverseOrder={false} toastOptions={{
    style: {
      zIndex: 9999,
    },
    
  }} />
    </QueryClientProvider>
  </StrictMode>,
)
