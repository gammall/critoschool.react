import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './views/Home'
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={ <Home /> }/>
  <Route path='/Contacts' element={ <Contacts /> }/>
  <Route path='*' element={ <NotFound />} />
</Routes>
</BrowserRouter>
);
