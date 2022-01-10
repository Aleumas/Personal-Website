import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import Post from './Post';
import Require from './Public/Post_Images/require';

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/Portfolio' element={<App/>} />
      <Route path='Blog' element={<div><Outlet/></div>}> 
        <Route path=':post' element={<Post/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
