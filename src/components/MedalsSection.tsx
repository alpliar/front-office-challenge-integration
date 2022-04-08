import { Grid, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import MockDataHelper from '../helpers/mockData.helper'
import { ICountryMedalsFlat } from '../model/medal.model'
import Title from './Title'

const columns: ColumnsType<ICountryMedalsFlat> = [
  {
    title: 'Pays',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Or',
    dataIndex: 'gold',
    key: 'gold',
    sorter: (a: ICountryMedalsFlat, b: ICountryMedalsFlat) => a.gold - b.gold,
  },
  {
    title: 'Argent',
    dataIndex: 'silver',
    key: 'silver',
    sorter: (a: ICountryMedalsFlat, b: ICountryMedalsFlat) => a.silver - b.silver,
  },
  {
    title: 'Bronze',
    dataIndex: 'bronze',
    key: 'bronze',
    sorter: (a: ICountryMedalsFlat, b: ICountryMedalsFlat) => a.bronze - b.bronze,
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    sorter: (a: ICountryMedalsFlat, b: ICountryMedalsFlat) => a.total - b.total,
    sortOrder: 'descend',
  },
]

const MedalsSection: React.FC = () => {
  const medalsPerCountry = MockDataHelper.getMedalsPerCountry()

  const isSmallDevice = !Grid.useBreakpoint().md

  return (
    <>
      <Title level={2}>Médailles</Title>
      <Table
        pagination={false}
        dataSource={medalsPerCountry}
        columns={columns}
        size={isSmallDevice ? 'small' : 'large'}
      />
    </>
  )
}

export default MedalsSection
