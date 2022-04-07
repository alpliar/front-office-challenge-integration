import { Divider } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import DisciplinesCarousel from './DisciplinesCarousel'
import DisciplinesSelect from './DisciplinesSelect'

const AppMainContainer = () => {
  const contentStyle: React.CSSProperties = {
    backgroundColor: '#F0F2F5',
    maxWidth: '96em',
    margin: 'auto',
  }
  return (
    <Content style={contentStyle}>
      <DisciplinesSelect />
      <Divider />
      <DisciplinesCarousel />
      <Divider />
    </Content>
  )
}

export default AppMainContainer
