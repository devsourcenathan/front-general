import {Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import React from 'react'

const InputList = () => {


  interface DataType {
    name: string
    quantity: number
    price: number
    date: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Nom',
      dataIndex: 'name',
    },
    {
      title: 'Quantité',
      dataIndex: 'quantity',
    },
    {
      title: 'Montant',
      dataIndex: 'price',
      render: text => <span style={{color: "blue"}}>{text}</span>
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: "Clavier",
      quantity: 10,
      price: 10000,
      date: "24 Oct 2022"
    },
    {
      key: '2',
      name: "Souris",
      quantity: 12,
      price: 120000,
      date: "24 Oct 2022"
    },
    {
      key: '3',
      name: "RAM",
      quantity: 24,
      price: 240000,
      date: "24 Oct 2022"
    },
    {
      key: '4',
      name: "DD",
      quantity: 57,
      price: 570000,
      date: "24 Oct 2022"
    },
  ];
  
  return (
    <>
    <Table columns={columns} dataSource={data}  />
    </>
  )
}

export default InputList