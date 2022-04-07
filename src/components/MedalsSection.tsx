import { Table } from 'antd'
import React from 'react'
import MockDataHelper from '../helpers/mockData.helper'
import Title from './Title'

const MedalsSection: React.FC = () => {
  const medalsPerCountry = MockDataHelper.getMedalsPerCountry()
  const columns = [
    {
      title: 'Pays',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Or',
      dataIndex: 'gold',
      key: 'gold',
    },
    {
      title: 'Argent',
      dataIndex: 'silver',
      key: 'silver',
    },
    {
      title: 'Bronze',
      dataIndex: 'bronze',
      key: 'bronze',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
  ]

  return (
    <>
      <Title level={2}>Médailles</Title>
      <Table dataSource={medalsPerCountry} columns={columns} />;
    </>
  )
}

export default MedalsSection
