import { Content } from 'antd/lib/layout/layout'
import React from 'react'
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
    </Content>
  )
}

export default AppMainContainer
