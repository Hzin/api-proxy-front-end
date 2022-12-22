import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import SuspenseSpinner from './components/SuspenseSpinner';
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom';

const LazyApp = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Suspense fallback={<SuspenseSpinner />}>
      <LazyApp />
      <ToastContainer newestOnTop />
    </Suspense>
  </BrowserRouter>,
)
