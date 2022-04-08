import { Select } from 'antd'
import React, { useContext } from 'react'
import EventsContext from '../context/EventsContext'
import MockDataHelper from '../helpers/mockData.helper'
import IEvent from '../model/event.model'

const DisciplinesSelect: React.FC = () => {
  const { selectedEvents, setSelectedEvents } = useContext(EventsContext)
  const allEvents: Array<IEvent> = MockDataHelper.getEvents()

  const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: '1em 0',
  }

  const handleChange = (newList: Array<string>) => {
    setSelectedEvents(newList)
  }

  return (
    <Select
      style={selectStyle}
      mode="multiple"
      placeholder="Please select"
      value={selectedEvents}
      onChange={handleChange}
    >
      {allEvents.map((event: IEvent) => {
        const { id, sportTitle } = event
        // FIXME: event.id should be used as Select.Option value, but this allows for duplicate selections...
        // const { id, sportTitle } = event
        // return <Select.Option value={id}>{sportTitle}</Select.Option>
        return (
          <Select.Option key={id} value={sportTitle}>
            {sportTitle}
          </Select.Option>
        )
      })}
    </Select>
  )
}

export default DisciplinesSelect
