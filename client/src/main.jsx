import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// Add Clerk
import { ClerkProvider } from '@clerk/clerk-react'
import { darkT } from './components/clerkTheme.jsx';
 

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}  appearance={{
        elements: darkT.elements,
        // optionally: variables: darkT.variables
      }}>
      <App />
    </ClerkProvider>
  </StrictMode>
)
