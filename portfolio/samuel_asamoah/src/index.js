import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import Post from './Post';
import Blog from './Blog';
import Require from './Public/Post_Images/require';

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <HashRouter>
      <Routes>
        <Route path='/Portfolio' element={<App/>}>
          <Route path='Blog' exact element={<Blog/>}> 
            <Route path=':post' exact element={<Post/>}/>
          </Route>
        </Route>
      </Routes>
  </HashRouter>,
  rootElement
);
