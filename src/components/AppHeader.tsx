import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import Title from './Title'

const AppHeader = () => {
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#D4D4D4', // Why the hell does Antd Header component has dark background & text by default ?
    textAlign: 'center',
    padding: '1em',
    height: 'inherit', // Antd Header component has a reduced height by default...
  }

  return (
    <Header style={headerStyle}>
      <Title noMargin>JO 2020</Title>
    </Header>
  )
}

export default AppHeader
