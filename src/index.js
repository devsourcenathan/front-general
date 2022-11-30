import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserContextProvider from './contexts/UserContext'
import StoreContextProvider from './contexts/StoreContext'
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <StoreContextProvider>

      <BrowserRouter>

        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='*' element={<App />} />
        </Routes>
        
      </BrowserRouter>

    </StoreContextProvider>
</UserContextProvider>
);

