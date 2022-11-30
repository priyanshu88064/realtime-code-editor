import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditorHead from './components/EditorHead';
import CreateRoom from './components/CreateRoom';
import EnterRoom from './components/EnterRoom';

ReactDOM.render((
    <div className='Papa-wrapper'>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create' element={<CreateRoom/>}/>
                <Route path='/join' element={<EnterRoom/>}/>
                <Route path='/editor/:roomId' element={<EditorHead/>}/>
            </Routes>        
        </BrowserRouter>
    </div>
) , document.getElementById("root"));
