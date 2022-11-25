import React from 'react'
import { Table } from 'antd';

const ProvidersList = () => {
    const dataSource = [
        {
          key: '1',
          name: 'General store',
          address: 'Carefour makepe',
          contact: '656296992',
        },
        {
          key: '2',
          name: 'Plus informatique',
          address: 'Descente total 2',
          contact: '656296992',
        },
      ];
      
      const columns = [
        {
          title: 'Nom',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Adresse',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Contact',
          dataIndex: 'contact',
          key: 'contact',
        },
      ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default ProvidersList
