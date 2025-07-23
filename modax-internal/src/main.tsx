import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Temporarily disable MSW to debug
// async function enableMocking() {
//   if (import.meta.env.DEV) {
//     const { worker } = await import('./lib/msw/browser')
//     return worker.start({
//       onUnhandledRequest: 'bypass',
//     })
//   }
// }

// enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
// })
