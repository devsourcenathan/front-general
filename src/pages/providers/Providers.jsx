import { Col, Row, Typography, Button } from 'antd'
import {BsFillBookmarkPlusFill} from 'react-icons/bs'
import React from 'react'
import { useState } from 'react'
import AddProvider from './AddProvider.tsx';
import ProvidersList from './ProvidersList';

const {Title} = Typography

const Providers = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Title level={5}>Fournisseurs</Title>
            
            <Row>
                <Col lg={{offset: "20"}} md={{offset: "16"}}>
                    <Button onClick={() => setOpen(true)}  shape="default" icon={<BsFillBookmarkPlusFill style={{marginRight: "5px"}}/>} size="large" style={{margin: "5px", marginBottom: "10px", borderRadius: 0}}>
                        Ajouter
                    </Button>
                    <AddProvider open={open} setOpen={setOpen} />
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <ProvidersList />
                </Col>
            </Row>
           
    </div>
  )
}

export default Providers
