import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import MockDataHelper from '../helpers/mockData.helper'
import Title from './Title'

interface ICountryMedals {
  key: string
  country: string
  gold: number
  silver: number
  bronze: number
  total: number
}

const MedalsSection: React.FC = () => {
  const medalsPerCountry = MockDataHelper.getMedalsPerCountry()
  const columns: ColumnsType<ICountryMedals> = [
    {
      title: 'Pays',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Or',
      dataIndex: 'gold',
      key: 'gold',
      sorter: (a: { gold: number }, b: { gold: number }) => a.gold - b.gold,
    },
    {
      title: 'Argent',
      dataIndex: 'silver',
      key: 'silver',
      sorter: (a: { silver: number }, b: { silver: number }) => a.silver - b.silver,
    },
    {
      title: 'Bronze',
      dataIndex: 'bronze',
      key: 'bronze',
      sorter: (a: { silver: number }, b: { silver: number }) => a.silver - b.silver,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      sorter: (a: { total: number }, b: { total: number }) => a.total - b.total,
      sortOrder: 'descend',
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
