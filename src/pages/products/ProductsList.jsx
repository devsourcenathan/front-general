import React from 'react'
import { Table } from 'antd';
import ShowProduct from './ShowProduct';
import { useState } from 'react';

const ProductsList = () => {
    const [open, setOpen] = useState(false)
    const [product, setProduct] = useState(null)

    const showDetails = (record) => {
        setProduct(() => record)
        setOpen(true)
    }
    const dataSource = [
        {
          id: "kdfjldhfjhdf",
          key: '1',
          title: 'Produit 1',
          description: "C'est un produit",
          prix_achat: 300,
          prix_vente: 500,
          prix_revendeur: 450,
          stock: 10,
        },
        {
          id: "dsdsddfvd",
          key: '2',
          title: 'Produit 2',
          description: "C'est un produit",
          prix_achat: 300,
          prix_vente: 500,
          prix_revendeur: 450,
          stock: 15,
        },
      ];
      
      const columns = [
        {
          title: 'Titre',
          dataIndex: 'title',
          key: 'title',
          render: (_, record) => {
            return <div onClick={() => showDetails(record)}>{record.title}</div>
          }
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: "Prix d'achat",
          dataIndex: 'prix_achat',
          key: 'prix_achat',
        },
        {
          title: "Prix de vente",
          dataIndex: 'prix_vente',
          key: 'prix_vente',
        },
        {
          title: "Prix revendeur",
          dataIndex: 'prix_revendeur',
          key: 'prix_revendeur',
        },
      ];

  return (
    <>
        <Table dataSource={dataSource} columns={columns} />
        <ShowProduct open={open} setOpen={setOpen} product={product} />
    </>
  )
}

export default ProductsList
