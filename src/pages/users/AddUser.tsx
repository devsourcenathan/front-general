import { Button, Col, Drawer, Form, Input, message, Row, Select} from 'antd';
import React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

const AddUser: React.FC = ({open, setOpen}) => {

  const [form] = Form.useForm()



  // const mutation = useMutation({
  //   mutationFn: (store: PostData) => {
  //     return axios.post(`store`, store)
  //   },
  // })

//   interface PostData {
//     name: string
//     email: string
//     telephone: string
//     role: string
//     state: string
//   }
    
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
      <Drawer title="Ajouter un utilisateur" placement="right" onClose={() => setOpen(false)} open={open}>
      <Form layout="vertical" hideRequiredMark form={form} onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Nom"
                rules={[{ required: true, message: "Entrez un nom !" }]}
              >
                <Input placeholder="Nom..." />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Entrez une email !" }]}
              >
                <Input placeholder="Email..." />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="password"
                label="Mot de passe"
                rules={[{ required: true, message: "Entrez un mot de passe !" }]}
              >
                <Input placeholder="Mot de passe..." />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="telephone"
                label="Contact"
                rules={[{ required: true, message: "Entrez un contact !" }]}
              >
                <Input placeholder="Contact..." />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: "Selectionnez un role !" }]}
              >
                    <Select
                      defaultValue="caisse"
                      options={[
                        {
                          value: 'caisse',
                          label: 'Caisse',
                        },
                        {
                          value: 'admin',
                          label: 'Administrateur',
                        }
                      ]}
                    />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="etat"
                label="Etat"
                rules={[{ required: true, message: "Selectionez un etat !" }]}
              >
                <Select
                      defaultValue="actif"
                      options={[
                        {
                          value: 'actif',
                          label: 'Actif',
                        },
                        {
                          value: 'desactiver',
                          label: 'Pas actif',
                        }
                      ]}
                    />
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

export default AddUser;