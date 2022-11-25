import './App.css';
import {Routes, Route} from "react-router-dom"
// import Error from './components/pages/Error';
import { Layout,Typography} from 'antd'
import SideBar from './partials/SideBar.tsx';
import Stores from './pages/stores/Stores';
import Customers from './pages/customers/Customers';
import Users from './pages/users/Users';
import Products from './pages/products/Products';
import Providers from './pages/providers/Providers';
import Variations from './pages/variations/Variations';

const {Title} = Typography
const { Header, Content, Footer, } = Layout

function App() {



  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout className="site-layout" style={{paddingLeft: "40px"}}>
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Title level={3} style={{marginTop: "20px", marginLeft: "20px", color: "#09ABC2"}}>General Stores App</Title>
          </Header>
          <Content >
              <Routes>
                  {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                  {/* <Route path='*' element={<Error />} /> */}
                  <Route path='/customers' element={<Customers />} />
                  <Route path='/providers' element={<Providers />} />
                  <Route path='/stores' element={<Stores />} />
                  <Route path='/users' element={<Users />} />
                  <Route path='/products' element={<Products />} />
                  <Route path='/variations' element={<Variations />} />

              </Routes>

          </Content>
          <Footer style={{ textAlign: 'center' }}>general ©{new Date().getFullYear()} </Footer>
        </Layout>
      </Layout>
  )
}

export default App;
