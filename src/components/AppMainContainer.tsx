import { Divider } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import DisciplinesCarousel from './DisciplinesCarousel'
import DisciplinesSelect from './DisciplinesSelect'
import MedalsSection from './MedalsSection'

const AppMainContainer = () => {
  const contentStyle: React.CSSProperties = {
    backgroundColor: '#F0F2F5',
    width: '90%',
    maxWidth: '1024px',
    margin: 'auto',
  }

  return (
    <Content style={contentStyle}>
      <DisciplinesSelect />
      <Divider />
      <DisciplinesCarousel />
      <Divider />
      <MedalsSection />
    </Content>
  )
}

export default AppMainContainer
