import React from 'react'
import { Row, Col, Card} from 'antd'


const AllStat = () => {

  return (
    <>
        <Row style={{marginTop: "20px", marginBottom: "40px"}}>
            <Col md={{span: "24"}} lg={{span: "8"}}>
                <Card style={{ width: "70%", minWidth: "200px", margin: "10px", borderRadius: "15px", backgroundColor: "#B1B2B5" }}>
                    <p>
                        <b style={{fontSize: "18px"}}>Entrees</b>
                        <Row>
                            <Col md={{span: "24"}} lg={{span: "12"}}>
                                <span style={{ fontSize: "14px"}}>
                                    Produit
                                </span>
                            </Col>
                            <Col md={{span: "24"}} lg={{span: "12"}} style={{textAlign: 'right'}}>
                                <b style={{fontSize: "18px", color: "green"}}>15</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span: "24"}} lg={{span: "12"}}>
                                <span style={{ fontSize: "14px"}}>
                                    Montants
                                </span>
                            </Col>
                            <Col md={{span: "24"}} lg={{span: "12"}} style={{textAlign: 'right'}}>
                                <b style={{fontSize: "18px", color: "green"}}>1.359 €</b>
                            </Col>
                        </Row>
                    </p>
                </Card>
            </Col>
            <Col md={{span: "24"}} lg={{span: "8"}}>
                <Card style={{ width: "70%", minWidth: "200px", margin: "10px", borderRadius: "15px", backgroundColor: "#B1B2B5" }}>
                    <p>
                        <b style={{fontSize: "18px"}}>Soties</b>
                        <Row>
                            <Col md={{span: "24"}} lg={{span: "12"}}>
                                <span style={{ fontSize: "14px"}}>
                                    Produits
                                </span>
                            </Col>
                            <Col md={{span: "24"}} lg={{span: "12"}} style={{textAlign: 'right'}}>
                                <b style={{fontSize: "18px", color: "green"}}>15</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span: "24"}} lg={{span: "12"}}>
                                <span style={{ fontSize: "14px"}}>
                                    Montant
                                </span>
                            </Col>
                            <Col md={{span: "24"}} lg={{span: "12"}} style={{textAlign: 'right'}}>
                                <b style={{fontSize: "18px", color: "green"}}>1.359 €</b>
                            </Col>
                        </Row>
                    </p>
                </Card>
            </Col>
            <Col md={{span: "24"}} lg={{span: "8"}}>
                <Card style={{ width: "70%", minWidth: "200px", margin: "10px", borderRadius: "15px", backgroundColor: "#B1B2B5" }}>
                    <p>
                        <b style={{fontSize: "18px"}}>Transferts</b>
                        <Row>
                            <Col md={{span: "24"}} lg={{span: "12"}}>
                                <span style={{ fontSize: "14px"}}>
                                    Produits
                                </span>
                            </Col>
                            <Col md={{span: "24"}} lg={{span: "12"}} style={{textAlign: 'right'}}>
                                <b style={{fontSize: "18px", color: "green"}}>15</b>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{span: "24"}} lg={{span: "12"}}>
                                <span style={{ fontSize: "14px"}}>
                                    Montant
                                </span>
                            </Col>
                            <Col md={{span: "24"}} lg={{span: "12"}} style={{textAlign: 'right'}}>
                                <b style={{fontSize: "18px", color: "green"}}>1.359 €</b>
                            </Col>
                        </Row>
                    </p>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default AllStat