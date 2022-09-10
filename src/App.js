import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home'
// import axios from 'axios'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import {CSVLink} from "react-csv";

function App() {

  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleName(event) {
        console.log('hello');
        setUsername(event.target.value);
        console.log({username});
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    const data = [{
        'username':username,
        'password':password
    }];

    const headers = [
        {label: 'username', key: 'username'},
        {label: 'password', key: 'password'}
    ]
    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data
    };

  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#010424';
      document.body.style.color = 'white';
      // document.querySelector('.primary').style.color='white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#010424';
      // document.querySelector('.primary').style.color = 'black';
    }
  }


   return (
      <>
    <Router>
      <Navbar title='Basic' aboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
      <Routes>
      {/* <Form></Form> */}
          <Route exact path="/Login" element={<Login handleName={handleName} handlePassword={handlePassword} username = {username} password = {password}/>}>
            
          </Route>
          <Route exact path="/Home" element={<Home/>}></Route>

      </Routes>
      
    </Router>
    <CSVLink {...csvReport}>
      Submit
    </CSVLink>
    </>
  );
}

export default App;
