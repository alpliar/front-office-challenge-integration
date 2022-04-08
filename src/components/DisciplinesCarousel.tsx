import { Carousel, Empty } from 'antd'
import React from 'react'
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
  const events = MockDataHelper.getEvents()

  return (
    <>
      <Title level={2}>Prochaines épreuves</Title>

      {!events && <Empty />}
      {events && (
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
            // nextArrow={<NextArrow />}
            // prevArrow={<PrevArrow />}
          >
            {events.map((event: IEvent) => {
              return (
                <>
                  <DisciplineCard key={event.id} {...event} />
                </>
              )
            })}
          </Carousel>
        </>
      )}
    </>
  )
}

export default DisciplinesCarousel
