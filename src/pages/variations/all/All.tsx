import {Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import React from 'react'

const All = () => {

  const getColor = (text) => {
    if(text === "Sortie"){
        return "red"
    }
    if(text === "Entree"){
        return "green"
    }
    return 'yellowgreen'
}

  interface DataType {
    name: string
    type: string
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
      title: 'Type',
      dataIndex: 'type',
      render: (_: string, record) => <span style={{color: getColor(record.type)}}>{_}</span>
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
      name: "Desktop hp",
      type: "Entree",
      quantity: 10,
      price: 200000,
      date: "24 Oct 2022"
    },
    {
      key: '2',
      name: "Desktop hp",
      type: "Sortie",
      quantity: 10,
      price: 200000,
      date: "24 Oct 2022"
    },
    {
      key: '3',
      name: "Desktop hp",
      type: "Entree",
      quantity: 10,
      price: 200000,
      date: "24 Oct 2022"
    },
    {
      key: '4',
      name: "Desktop hp",
      type: "Sortie",
      quantity: 10,
      price: 200000,
      date: "24 Oct 2022"
    },
  ];
  
  return (
    <>
    <Table columns={columns} dataSource={data}  />
    </>
  )
}

export default All