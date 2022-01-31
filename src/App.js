import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Chat from './component/Chat';
import Header from './component/Header';
import Sidebar from './component/Sidebar';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Header/>
      <AppBody>
      <Sidebar/>
      
      <Routes>
      <Route path="/" element={<><Chat /></>}/>
      </Routes>
      </AppBody>
    
  </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
`;
