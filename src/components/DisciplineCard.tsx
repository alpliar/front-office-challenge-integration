import { Card } from 'antd'
import React from 'react'
import IEvent from '../model/event.model'

const DisciplineCard: React.FC<IEvent> = ({ id, date, pictureUrl, sportId, sportTitle }) => {
  const cardStyle: React.CSSProperties = {
    height: '10em',
  }
  return <Card style={cardStyle}>{sportTitle}</Card>
}

export default DisciplineCard
