import './App.css';
import {Routes} from "react-router-dom"
// import Error from './components/pages/Error';
import { Layout,Typography} from 'antd'
import SideBar from './partials/SideBar.tsx';

const {Title} = Typography
const { Header, Content, Footer, } = Layout

function App() {



  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout className="site-layout" style={{paddingLeft: "40px"}}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Title level={3} style={{marginTop: "20px", marginLeft: "20px", color: "#09ABC2"}}>App</Title>
          </Header>
          <Content >
              <Routes>
                  {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                  {/* <Route path='*' element={<Error />} /> */}

              </Routes>

          </Content>
          <Footer style={{ textAlign: 'center' }}>general ©{new Date().getFullYear()} </Footer>
        </Layout>
      </Layout>
  )
}

export default App;
