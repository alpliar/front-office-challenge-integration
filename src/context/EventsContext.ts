import { createContext } from 'react'
import MockDataHelper from '../helpers/mockData.helper'

export const allEvents = MockDataHelper.getEventsTitle()

const EventsContext = createContext({
  allEvents,
  selectedEvents: [...allEvents],
  setSelectedEvents: (arg: string[]) => {},
})

export default EventsContext
