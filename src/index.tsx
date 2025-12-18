import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './cssVars/colors.css'
import App from './App.tsx'
import 'flowbite';
import 'flowbite/dist/flowbite.js';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "toastr/build/toastr.min.css";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
