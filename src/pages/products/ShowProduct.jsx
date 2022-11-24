import { Descriptions, Drawer} from 'antd';
import React from 'react';
import DescriptionsItem from 'antd/es/descriptions/Item';

const ShowProduct = ({open, setOpen, product}) => {

    console.log(product);

  return (
    <>
      <Drawer title="Informations du produit" placement="right" onClose={() => setOpen(false)} open={open}>
        <Descriptions >
            <DescriptionsItem>ok</DescriptionsItem>
        </Descriptions>
      </Drawer>
    </>
  );
};

export default ShowProduct;