import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import { Carousel, CarouselProps, Col, Empty, Grid, Row } from 'antd'
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
  }

  const Icon: React.FC = () =>
    isNext ? (
      <RightCircleOutlined
        aria-label="Voir les épreuves suivantes"
        role="button"
        onClick={onClick}
        style={iconStyle}
      />
    ) : (
      <LeftCircleOutlined
        aria-label="Voir les épreuves précédentes"
        role="button"
        onClick={onClick}
        style={iconStyle}
      />
    )

  return <Icon />
}

const DisciplinesCarousel: React.FC = () => {
  const { context: selectedEvents } = useContext(EventsContext)
  const events = MockDataHelper.getEventsByTitle(selectedEvents)

  const isSmallDevice = !Grid.useBreakpoint().md

  const carouselRef = React.createRef<CarouselRef>()

  const carouselStyle: React.CSSProperties = {
    cursor: 'grab',
  }

  const carouselButtonsContainerStyle: React.CSSProperties = {
    textAlign: 'center',
  }

  const carouselSettings: CarouselProps = {
    arrows: true,
    centerMode: false,
    dots: false,
    draggable: true,
    infinite: false,
    slidesPerRow: 1,
    slidesToScroll: isSmallDevice ? 1 : 3,
    slidesToShow: isSmallDevice ? 1 : 3,
  }

  const handleNext = () => {
    if (carouselRef?.current) carouselRef.current.next()
  }
  const handlePrev = () => {
    if (carouselRef?.current) carouselRef.current.prev()
  }

  const buttonsSpan = isSmallDevice ? 4 : 2
  const carouselSpan = 24 - buttonsSpan * 2

  return (
    <>
      <Title level={2}>Prochaines épreuves</Title>

      {!events.length && <Empty />}

      {events.length > 0 && (
        <Row align="middle" justify="center">
          <Col span={buttonsSpan} style={carouselButtonsContainerStyle}>
            <PaginationButton direction="prev" onClick={handlePrev} />
          </Col>
          <Col span={carouselSpan}>
            <Carousel
              ref={carouselRef}
              style={carouselStyle}
              {...carouselSettings}
              // nextArrow={<PaginationButton direction="next" onClick={handleNext} />}
              // prevArrow={<PaginationButton direction="prev" onClick={handlePrev} />}
            >
              {events.map((event: IEvent) => {
                return <DisciplineCard key={event.id} {...event} />
              })}
            </Carousel>
          </Col>
          <Col span={buttonsSpan} style={carouselButtonsContainerStyle}>
            <PaginationButton direction="next" onClick={handleNext} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default DisciplinesCarousel
