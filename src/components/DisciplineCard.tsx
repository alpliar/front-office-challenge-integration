import { Card, Image } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import IEvent from '../model/event.model'

const DisciplineCard: React.FC<IEvent> = ({ id, date, pictureUrl, sportId, sportTitle }) => {
  const cardStyle: React.CSSProperties = {
    height: '10em',
  }
  return (
    <Card style={cardStyle}>
      <Image preview={false} src={pictureUrl} alt={`Image illustrant le sport ${sportTitle}`} />
      <div style={{ padding: '1em' }}>
        <Text>{sportTitle}</Text>
        <Text>{date}</Text>
      </div>
    </Card>
  )
}

export default DisciplineCard
