import { Col, Row, Typography, Button } from 'antd'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import React from 'react'
import { useState } from 'react'
import CustomerList from './CustomersList'
import AddCustomer from './AddCustomer.tsx'

const {Title} = Typography

const Customers = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Title level={5}>Clients</Title>
            
            <Row>
                <Col lg={{offset: "20"}} md={{offset: "16"}}>
                    <Button onClick={() => setOpen(true)}  shape="default" icon={<BsFillPersonPlusFill style={{marginRight: "5px"}}/>} size="large" style={{margin: "5px", marginBottom: "10px"}}>
                        Ajouter
                    </Button>
                    <AddCustomer open={open} setOpen={setOpen} />
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <CustomerList /> 
                </Col>
            </Row>
           
    </div>
  )
}

export default Customers