import React from 'react'
// import { useContext } from 'react';
import { Row, Col, Card} from 'antd'
// import params from '../../../../../config/params';
// import translation from '../../../../lang/translations';
// import { LanguageContext } from '../../../../context/LanguageContext';


const InputStat = () => {
    // const {language} = useContext(LanguageContext)
  return (
    <>
        <Row style={{marginTop: "20px", marginBottom: "40px"}}>
            <Col md={{span: "24"}} lg={{span: "12"}}>
                <Card style={{ width: "70%", minWidth: "200px", margin: "10px", borderRadius: "15px", backgroundColor: "#B1B2B5" }}>
                    <p>
                        <b style={{fontSize: "18px"}}>CE MOIS</b>
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
            <Col md={{span: "24"}} lg={{span: "12"}}>
                <Card style={{ width: "70%", minWidth: "200px", margin: "10px", borderRadius: "15px", backgroundColor: "#B1B2B5" }}>
                    <p>
                        <b style={{fontSize: "18px"}}>CE TRIMESTRE</b>
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

export default InputStat