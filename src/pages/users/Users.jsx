import { Col, Row, Typography, Button } from 'antd'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import React from 'react'
import { useState } from 'react'
import AddUser from './AddUser.tsx'
import UsersList from './UsersList'

const {Title} = Typography

const Users = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Title level={5}>Utilisateurs</Title>
            
            <Row>
                <Col lg={{offset: "20"}} md={{offset: "16"}}>
                    <Button onClick={() => setOpen(true)}  shape="default" icon={<BsFillPersonPlusFill style={{marginRight: "5px"}}/>} size="large" style={{margin: "5px", marginBottom: "10px"}}>
                        Ajouter
                    </Button>
                    <AddUser />
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <UsersList open={open} setOpen={setOpen} />
                </Col>
            </Row>
           
    </div>
  )
}

export default Users