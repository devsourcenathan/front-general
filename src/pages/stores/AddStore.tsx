import { Button, Col, Drawer, Form, Input, message, Row} from 'antd';
import React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

const AddStore: React.FC = ({open, setOpen}) => {

  const [form] = Form.useForm()



  // const mutation = useMutation({
  //   mutationFn: (store: PostData) => {
  //     return axios.post(`store`, store)
  //   },
  // })

  interface PostData {
    libele: string
    address: string
    contact: string
  }
    
    const onFinish = (values: any) => {
    
      // const store: PostData = {
      //   libele: values.libele,
      //   address: values.address,
      //   contact: values.contact
      // }
    
      // mutation.mutate(store)
      // mutation.isLoading && message.loading("Sauvegarde...")
      // if(mutation.isSuccess){

      //   message.success("Save")
      //   form.resetFields()
      //   setOpen(false)
      // }
    
    }
  return (
    <>
      <Drawer title="Ajouter une boutique" placement="right" onClose={() => setOpen(false)} open={open}>
      <Form layout="vertical" hideRequiredMark form={form} onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="libele"
                label="Nom de la boutique"
                rules={[{ required: true, message: "Entrez un nom !" }]}
              >
                <Input placeholder="Nom de la boutique" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Adresse"
                rules={[{ required: true, message: "Entrez une adresse !" }]}
              >
                <Input placeholder="Adresse de la boutique" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
          <Col span={24}>
              <Form.Item
                name="contact"
                label="Contact"
                rules={[{ required: true, message: "Entrez un contact !" }]}
              >
                <Input placeholder="Contact de la boutique " />
              </Form.Item>
            </Col>
          </Row>


          <Button type="primary" size="large" htmlType='submit' style={{marginTop: "20px"}}>
            Enregistrer
        </Button>
        </Form>
      </Drawer>
    </>
  );
};

export default AddStore;