import { Suspense } from 'react'

// ** Router Import
import Router from './routes/Router'

const App = () => {
  return (
    <Suspense fallback={null}>
      <Router />
    </Suspense>
  )
}

export default App
