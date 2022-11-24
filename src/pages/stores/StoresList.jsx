import React from 'react'
import { Table } from 'antd';

const StoresList = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Douala',
          address: 'Carefour makepe',
          contact: '656296992',
        },
        {
          key: '2',
          name: 'Yaounde',
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

export default StoresList
