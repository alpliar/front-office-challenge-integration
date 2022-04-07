import { Select } from 'antd'
import React from 'react'
import MockDataHelper from '../helpers/mockData.helper'
import IEvent from '../model/event.model'

const DisciplinesSelect: React.FC = () => {
  const defaultValue: Array<string> = MockDataHelper.getEventsTitle()
  const events: Array<IEvent> = MockDataHelper.getEvents()

  return (
    <Select mode="multiple" placeholder="Please select" defaultValue={defaultValue}>
      {events.map((event: IEvent) => {
        const { sportTitle } = event
        // FIXME: event.id should be used as Select.Option value, but this allows for duplicate selections...
        // const { id, sportTitle } = event
        // return <Select.Option value={id}>{sportTitle}</Select.Option>
        return <Select.Option value={sportTitle}>{sportTitle}</Select.Option>
      })}
    </Select>
  )
}

export default DisciplinesSelect
