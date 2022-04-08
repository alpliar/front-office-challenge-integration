import React, { useState } from 'react'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppLayout from './components/AppLayout'
import AppMainContainer from './components/AppMainContainer'
import EventsContext, { defaultContext as defaultEvents } from './context/EventsContext'

function App() {
  const [context, setContext] = useState<string[]>(defaultEvents)

  return (
    <EventsContext.Provider value={{ context, setContext }}>
      <AppLayout>
        <AppHeader />
        <AppMainContainer />
        <AppFooter />
      </AppLayout>
    </EventsContext.Provider>
  )
}

export default App
