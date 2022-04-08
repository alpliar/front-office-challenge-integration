import { Carousel, Empty } from 'antd'
import React, { useContext } from 'react'
import EventsContext from '../context/EventsContext'
import MockDataHelper from '../helpers/mockData.helper'
import IEvent from '../model/event.model'
import DisciplineCard from './DisciplineCard'
import Title from './Title'
// import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons'

// const NextArrow: React.FC = () => {
//   return (
//     <span style={{ backgroundColor: 'gold' }}>
//       <RightCircleFilled />
//     </span>
//   )
// }
// const PrevArrow: React.FC = () => {
//   return (
//     <span style={{ backgroundColor: 'gold' }}>
//       <LeftCircleFilled />
//     </span>
//   )
// }

const DisciplinesCarousel: React.FC = () => {
  const { context: selectedEvents } = useContext(EventsContext)
  const events = MockDataHelper.getEventsByTitle(selectedEvents)

  const carouselStyle: React.CSSProperties = {
    cursor: 'grab',
  }

  return (
    <>
      <Title level={2}>Prochaines épreuves</Title>

      {!events.length && <Empty />}

      {events.length > 0 && (
        <>
          <Carousel
            arrows
            slidesPerRow={1}
            slidesToShow={3}
            slidesToScroll={3}
            dots={false}
            centerMode={false}
            draggable
            infinite={false}
            style={carouselStyle}
            // nextArrow={<NextArrow />}
            // prevArrow={<PrevArrow />}
          >
            {events.map((event: IEvent) => {
              return <DisciplineCard key={event.id} {...event} />
            })}
          </Carousel>
        </>
      )}
    </>
  )
}

export default DisciplinesCarousel
