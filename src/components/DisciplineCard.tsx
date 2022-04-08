import { Card, Image, Space } from 'antd'
import Text from 'antd/lib/typography/Text'
import moment from 'moment'
import React from 'react'
import IEvent from '../model/event.model'

const DisciplineCard: React.FC<IEvent> = ({ id, date, pictureUrl, sportId, sportTitle }) => {
  const cardStyle: React.CSSProperties = {
    width: '100%',
  }
  const cardBodyStyle: React.CSSProperties = {
    padding: 0,
  }
  const imageStyle: React.CSSProperties = {
    objectFit: 'cover',
  }
  const cardContentStyle: React.CSSProperties = {
    padding: '1em',
    width: '100%',
  }
  const cardTitleStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '1.2em',
  }
  const formattedDate = moment.unix(parseInt(date)).format('DD-MM-YYYY - h:mm')

  return (
    <Card style={cardStyle} bodyStyle={cardBodyStyle}>
      <Image
        width="100%"
        height="10em"
        style={imageStyle}
        preview={false}
        src={pictureUrl}
        alt={`Image illustrant le sport ${sportTitle}`}
      />
      <Space direction="vertical" size="small" style={cardContentStyle}>
        <Text ellipsis style={cardTitleStyle}>
          {sportTitle}
        </Text>
        <Text>{formattedDate}</Text>
      </Space>
    </Card>
  )
}

export default DisciplineCard
