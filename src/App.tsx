import React from 'react'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppLayout from './components/AppLayout'
import AppMainContainer from './components/AppMainContainer'

function App() {
  return (
    <AppLayout>
      <AppHeader />
      <AppMainContainer />
      <AppFooter />
    </AppLayout>
  )
}

export default App
