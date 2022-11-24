import React from 'react'
import { Table } from 'antd';

const UsersList = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Nathan Tchinda',
          email: 'sadenachbinathan@gmail.com',
          telephone: '656296992',
          role: 'caisse',
          state: 'actif',
        },
        {
          key: '2',
          name: 'Kevine Kadge',
          email: 'kevakadje@gmail.com',
          telephone: '659144515',
          role: 'caisse',
          state: 'actif',
        },
      ];
      
      const columns = [
        {
          title: 'Nom',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Contact',
          dataIndex: 'telephone',
          key: 'telephone',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: 'Etat',
          dataIndex: 'state',
          key: 'state',
        },
      ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default UsersList
