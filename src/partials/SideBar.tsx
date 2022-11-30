
  import { Avatar, MenuProps } from 'antd'
  import { Layout, Menu, Typography, Divider } from 'antd'
  import React, { useState } from 'react'
  import { useNavigate, To } from 'react-router-dom';
  import {MdDashboard, MdPermContactCalendar, MdSettings} from 'react-icons/md'
  import {BsCalendarCheck,BsCashCoin} from 'react-icons/bs'
// import {HiOutlineDocumentDuplicate} from 'react-icons/hi'


  const {Title} = Typography
  const { Sider } = Layout
  
  type MenuItem = Required<MenuProps>['items'][number]
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      label,
      icon,
      children,
    } as MenuItem;
  }
  

  
  
  const SideBar: React.FC = () => {
    const navigate = useNavigate()
    

    const items: MenuItem[] = [
      getItem("Dashboard","/dashboard", <MdDashboard />),
      getItem("Repertoire", "/repository", <MdPermContactCalendar />, [
        getItem("Clients", '/customers'),
        getItem("Boutiques", '/stores'),
        getItem("Utilisateurs", '/users'),
        getItem("Fournisseurs", '/providers'),
      ]),
      getItem("Stock", "/stock",<BsCalendarCheck />, [
        getItem("Produits", "/products"),
        getItem("Sorties", "/output"),
        getItem("Entrees", "/input"),
        getItem("Variations", "/variations"),
      ]),
      getItem("Finances", "/finances", <BsCashCoin />, [
        getItem("Test", "/treasury"),
        // getItem(translation[language].menu.taxation, "/taxation"),
      ]),
      // getItem(translation[language].menu.document, "/document", <HiOutlineDocumentDuplicate />),
      getItem("Parametres", "/parameters", <MdSettings />),
    ]
      
    const go = (path: To) => {
      navigate(path)
    }
    
    
    const [collapsed, setCollapsed] = useState(false);
    const rootSubmenuKeys = ["/repository","/stock", "/finances"]
    const [openKeys, setOpenKeys] = useState([''])

    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys)
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
      }
    }
    
    return (
      
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <Title level={5} style={{textAlign: "center", color: "#fff"}} id="title">General Stores</Title>
          
            <Menu mode="inline" items={items} onClick={({key}) => go(key)} openKeys={openKeys} onOpenChange={onOpenChange}/>
      </Sider>
    )
  }
export default SideBar