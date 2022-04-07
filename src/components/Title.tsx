import { Typography } from 'antd'
import React from 'react'

interface ITitleProps {
  level?: 1 | 2 | 3 | 4 | 5
}

const Title: React.FC<ITitleProps> = ({ children, level = 1 }) => {
  return <Typography.Title level={level}>{children}</Typography.Title>
}

export default Title
