import React from 'react'
import {Result, Button} from 'antd'
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate()
    
  return (
      <Result
        status="404"
        title="404"
        subTitle="Page indisponible !"
        extra={<Button style={{background: "orange", color: "black", borderRadius: 0}} onClick={() => navigate("/dashboard")}>Retour au dashboard</Button>}
    />
  )
}
export default Error
