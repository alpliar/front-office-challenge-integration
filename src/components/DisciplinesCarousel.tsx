import { Empty } from 'antd'
import React from 'react'
import Title from './Title'

const DisciplinesCarousel: React.FC = () => {
  const events = null

  return (
    <>
      <Title level={2}>Prochaines épreuves</Title>

      {!events && <Empty />}
      {events && <div>events</div>}
    </>
  )
}

export default DisciplinesCarousel
