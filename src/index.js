import React from 'react';
import ReactDOM from 'react-dom';
import Controller from './components/Controller';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NavBar from './components/NavBar';
import NameBar from './components/NameBar';
import ActiveUsers from './components/ActiveUsers';

ReactDOM.render((
    <div className='Papa-wrapper'>
        <NavBar/>
        <NameBar/>
        <div className='chota-wrapper'>
            <ActiveUsers/>
            <Controller/>
        </div>
    </div>
) , document.getElementById("root"));
