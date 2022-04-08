import { Typography } from 'antd'
import React from 'react'

interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5
  noMargin?: boolean
}

const Title: React.FC<ITitleProps> = ({ children, level = 1, noMargin = false }) => {
  const titleStyle: React.CSSProperties = {
    marginBottom: noMargin ? 'inherit' : '1.5em',
  }
  return (
    <Typography.Title style={titleStyle} level={level}>
      {children}
    </Typography.Title>
  )
}

export default Title
