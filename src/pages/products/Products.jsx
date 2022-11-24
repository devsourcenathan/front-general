import { Col, Row, Typography, Button } from 'antd'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import React from 'react'
import { useState } from 'react'
import ProductsList from './ProductsList'
import AddProduct from './AddProduct.tsx'

const {Title} = Typography

const Products = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Title level={5}>Produits</Title>
            
            <Row>
                <Col lg={{offset: "20"}} md={{offset: "16"}}>
                    <Button onClick={() => setOpen(true)}  shape="default" icon={<BsFillPlusCircleFill style={{marginRight: "5px"}}/>} size="large" style={{margin: "5px", marginBottom: "10px"}}>
                        Ajouter
                    </Button>
                    <AddProduct open={open} setOpen={setOpen} />
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <ProductsList />
                </Col>
            </Row>
           
    </div>
  )
}

export default Products
