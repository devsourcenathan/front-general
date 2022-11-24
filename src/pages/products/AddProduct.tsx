import { Button, Col, Drawer, Form, Input, message, Row, Space} from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

const { TextArea } = Input

const AddProduct: React.FC = ({open, setOpen}) => {

  const [formProduct] = Form.useForm()
  const [formSerial] = Form.useForm()

  interface serial{
    libele: string
  }
  let cur: serial = {libele: ""}
  const [serials, setSerials] = useState([cur])

  const handleSerial = (e) => {
    let tmp = serials
    tmp.push(e.target.value)
    setSerials(tmp)

    message.success("Reussi")
  }

  // const mutation = useMutation({
  //   mutationFn: (store: PostData) => {
  //     return axios.post(`store`, store)
  //   },
  // })

  interface PostData {
    title: string
    description: string
    prix_achat: number
    prix_vente: number
    id_provider: number
    id_store: number
  }
    
    const onFinish = (values: any) => {
    
      // const product: PostData = {
        // title: values.title
        // description: values.description
        // prix_achat: values.prix_achat
        // prix_vente: values.prix_vente
        // id_provider: values.provider
        // id_store: values.store
      // }
    
      // mutation.mutate(product)
      // mutation.isLoading && message.loading("Sauvegarde...")
      // if(mutation.isSuccess){

      //   message.success("Save")
      //   form.resetFields()
      //   setOpen(false)
      // }
    
    }
    
    const [childrenDrawer, setChildrenDrawer] = useState(false);

  
    const onClose = () => {
      setOpen(false);
    };
  
    const showChildrenDrawer = () => {
      setChildrenDrawer(true);
    };
  
    const onChildrenDrawerClose = () => {
      setChildrenDrawer(false);
    };
    
  return (
    <>
            <Drawer title="Ajouter un produit" width={520} closable={false} onClose={onClose} open={open}>
                <Button type="primary" onClick={showChildrenDrawer}>
                    Test
                </Button>

                <Form layout="vertical" hideRequiredMark form={formProduct} onFinish={onFinish}>
                    <Row gutter={16}>
                        <Col span={24}>
                        <Form.Item
                            name="title"
                            label="Nom du produit"
                            rules={[{ required: true, message: "Entrez un nom !" }]}
                        >
                            <Input placeholder="Nom du produit" />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[{ required: true, message: "Entrez une description !" }]}
                        >
                            <TextArea placeholder="Description du produit" />
                        </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="prix_achat"
                                label="Prix d'achat"
                                rules={[{ required: true, message: "Entrez un prix d'achat !" }]}
                            >
                                <Input placeholder="Prix d'achat du produit " />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="prix_vente"
                                label="Prix de vente"
                                rules={[{ required: true, message: "Entrez un prix de vente !" }]}
                            >
                                <Input placeholder="Prix de vente du produit " />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item
                                name="prix_revendeur"
                                label="Prix de revendeur"
                                rules={[{ required: true, message: "Entrez un prix revendeur !" }]}
                            >
                                <Input placeholder="Prix revendeur du produit " />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Button type="primary" size="large" htmlType='submit' style={{marginTop: "20px", borderRadius: 0}}>
                        Enregistrer
                    </Button>
                </Form>

                <Drawer
                    title="Ajouter les numeros de serie"
                    width={320}
                    closable={false}
                    onClose={onChildrenDrawerClose}
                    open={childrenDrawer}
                    >
                    <Form layout="vertical" hideRequiredMark form={formSerial} onFinish={onFinish}>
                        <Row gutter={16}>
                            <Col span={24}>
                            <Form.Item
                                name="libele"
                                label="Numero de serie"
                                rules={[{ required: true, message: "Entrez un numero de serie !" }]}
                            >
                                <Input placeholder="Numero de serie..." />
                            </Form.Item>
                            </Col>
                        </Row>
                        {/* <Row gutter={16}>
                            <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[{ required: true, message: "Entrez une description !" }]}
                            >
                                <TextArea placeholder="Description du produit" />
                            </Form.Item>
                            </Col>
                        </Row> */}

                        <Space size="large">
                            <Button type="default" size="large" htmlType='submit' style={{marginTop: "20px", borderRadius: 0}}>
                                Terminer
                            </Button>
                            <Button onClick={((e) => handleSerial(e))} type="primary" size="large" htmlType='submit' style={{marginTop: "20px", borderRadius: 0}}>
                                Ajouter
                            </Button>
                        </Space>
                    </Form>
                </Drawer>
            </Drawer>
    </>
  );
};

export default AddProduct;