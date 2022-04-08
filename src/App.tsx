import React, { useState } from 'react'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppLayout from './components/AppLayout'
import AppMainContainer from './components/AppMainContainer'
import EventsContext, { allEvents } from './context/EventsContext'

function App() {
  const [selectedEvents, setSelectedEvents] = useState<string[]>(allEvents)

  return (
    <EventsContext.Provider value={{ allEvents, selectedEvents, setSelectedEvents }}>
      <AppLayout>
        <AppHeader />
        <AppMainContainer />
        <AppFooter />
      </AppLayout>
    </EventsContext.Provider>
  )
}

export default App
