import { Carousel, Empty } from 'antd'
import React from 'react'
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
  const events = {}

  return (
    <>
      <Title level={2}>Prochaines épreuves</Title>

      {!events && <Empty />}
      {events && (
        <>
          <Carousel
            arrows
            dots={false}
            centerMode
            style={{ display: 'flex', justifyItems: 'space-around' }}
            // nextArrow={<NextArrow />}
            // prevArrow={<PrevArrow />}
          >
            <div>
              <h3 style={{ backgroundColor: 'tomato' }}>Item 1</h3>
            </div>
            <div>
              <h3 style={{ backgroundColor: 'teal' }}>Item 2</h3>
            </div>
            <div>
              <h3 style={{ backgroundColor: 'gold' }}>Item 3</h3>
            </div>
            <div>
              <h3 style={{ backgroundColor: 'navy' }}>Item 4</h3>
            </div>
            <div>
              <h3 style={{ backgroundColor: 'violet' }}>Item 5</h3>
            </div>
          </Carousel>
        </>
      )}
    </>
  )
}

export default DisciplinesCarousel
