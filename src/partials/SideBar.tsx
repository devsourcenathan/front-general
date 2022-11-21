
  import { Avatar, MenuProps } from 'antd'
  import { Layout, Menu, Typography, Divider } from 'antd'
  import React, { useEffect, useState } from 'react'
  import { useNavigate, To } from 'react-router-dom';
// import {MdDashboard, MdPermContactCalendar, MdSettings} from 'react-icons/md'
// import {BsCalendarCheck,BsCashCoin} from 'react-icons/bs'
// import {HiOutlineDocumentDuplicate} from 'react-icons/hi'


  const {Title} = Typography
  const { Sider } = Layout
  
  type MenuItem = Required<MenuProps>['items'][number]
  
  // function getItem(
  //   label: React.ReactNode,
  //   key: React.Key,
  //   icon?: React.ReactNode,
  //   children?: MenuItem[],
  // ): MenuItem {
  //   return {
  //     key,
  //     label,
  //     icon,
  //     children,
  //   } as MenuItem;
  // }
  

  
  
  const SideBar: React.FC = () => {
    const [title, setTitle] = useState("")
    const navigate = useNavigate()
    

    const items: MenuItem[] = [
      // getItem(translation[language].menu.dashboard,"/dashboard", <MdDashboard />),
      // getItem(translation[language].menu.repository, "/repository", <MdPermContactCalendar />, [
      //   getItem(translation[language].menu.customers, '/customers'),
      //   getItem(translation[language].menu.institutions, '/institutions'),
      //   getItem(translation[language].menu.waiting_list, '/waiting_list'),
      // ]),
      // getItem(translation[language].menu.agenda, "/agenda",<BsCalendarCheck />, [
      //   getItem(translation[language].menu.calendar, "/calendar"),
      //   getItem(translation[language].menu.planner, "/planner"),
      // ]),
      // getItem(translation[language].menu.finance, "/finances", <BsCashCoin />, [
      //   getItem(translation[language].menu.treasury, "/treasury"),
      //   getItem(translation[language].menu.taxation, "/taxation"),
      // ]),
      // getItem(translation[language].menu.document, "/document", <HiOutlineDocumentDuplicate />),
      // getItem(translation[language].menu.parameters, "/parameters", <MdSettings />),
    ]
      
    const go = (path: To) => {
      navigate(path)
    }
    
    useEffect(() => {
      
      document.querySelector(".ant-layout-sider-trigger")?.addEventListener('click', () => {
        
        if(title.length === 0){
        
          let words = document.getElementById("title")?.textContent?.split(" ")
          
          let newTitle = ""
          words?.forEach((word) => {
            newTitle += word.substring(0,1)
          })
          
          setTitle(newTitle)
          
        }else{
          setTitle("")
        }
        
      })
    },[title])
    
    
    const [collapsed, setCollapsed] = useState(false);
    const rootSubmenuKeys = ["/repository","/agenda", "/finances"]
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
            <div className="logo" style={{textAlign: "center"}}>
              {/* <img src={logo} alt="logo" width={80}/> */}
            </div>
              <Title level={5} style={{textAlign: "center", color: "#fff"}} id="title">titre</Title>
          
            <Menu mode="inline" items={items} onClick={({key}) => go(key)} openKeys={openKeys} onOpenChange={onOpenChange}/>
      </Sider>
    )
  }
export default SideBar