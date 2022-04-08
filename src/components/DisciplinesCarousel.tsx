import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Carousel, CarouselProps, Col, Empty, Row } from 'antd'
import { CarouselRef } from 'antd/lib/carousel'
import React, { useContext } from 'react'
import EventsContext from '../context/EventsContext'
import MockDataHelper from '../helpers/mockData.helper'
import IEvent from '../model/event.model'
import DisciplineCard from './DisciplineCard'
import Title from './Title'

interface IPaginationButtonProps {
  direction: 'next' | 'prev'
  onClick: () => void
}

const PaginationButton: React.FC<IPaginationButtonProps> = ({ direction, onClick }) => {
  const isNext = direction === 'next'
  const iconStyle: React.CSSProperties = {
    fontSize: '2em',
    cursor: 'pointer',
  }
  const Icon: React.FC = () =>
    isNext ? (
      <RightCircleOutlined onClick={onClick} style={iconStyle} />
    ) : (
      <LeftCircleOutlined onClick={onClick} style={iconStyle} />
    )

  return <Icon />
}

const DisciplinesCarousel: React.FC = () => {
  const { context: selectedEvents } = useContext(EventsContext)
  const events = MockDataHelper.getEventsByTitle(selectedEvents)

  const carouselRef = React.createRef<CarouselRef>()

  const carouselStyle: React.CSSProperties = {
    cursor: 'grab',
  }

  const carouselSettings: CarouselProps = {
    arrows: true,
    centerMode: false,
    dots: false,
    draggable: true,
    infinite: false,
    slidesPerRow: 1,
    slidesToScroll: 3,
    slidesToShow: 3,
  }

  const handleNext = () => {
    if (carouselRef?.current) carouselRef.current.next()
  }
  const handlePrev = () => {
    if (carouselRef?.current) carouselRef.current.prev()
  }

  return (
    <>
      <Title level={2}>Prochaines épreuves</Title>

      {!events.length && <Empty />}

      {events.length > 0 && (
        <Row align="middle" justify="center">
          <Col span={2} style={{ textAlign: 'center' }}>
            <PaginationButton direction="prev" onClick={handlePrev} />
          </Col>
          <Col span={20}>
            <Carousel
              ref={carouselRef}
              {...carouselSettings}
              style={carouselStyle}
              // nextArrow={<PaginationButton direction="next" onClick={handleNext} />}
              // prevArrow={<PaginationButton direction="prev" onClick={handlePrev} />}
            >
              {events.map((event: IEvent) => {
                return <DisciplineCard key={event.id} {...event} />
              })}
            </Carousel>
          </Col>
          <Col span={2} style={{ textAlign: 'center' }}>
            <PaginationButton direction="next" onClick={handleNext} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default DisciplinesCarousel
