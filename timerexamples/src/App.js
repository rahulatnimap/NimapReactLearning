import logo from './logo.svg';
import './App.css';
import TimeOut from './components/TimeOut';
import IntervalOut from './components/IntervalOut';
import FormValidation from './components/FormValidation';
import PropDisplay from './components/props/PropDisplay';
import Login from './components/authentication/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/authentication/Register';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/authentication/Dashboard';
import AuthNavbar from './components/Auth-navbar/AuthNavbar';
import { useState } from 'react';
import RefExamples from './components/Ref/RefExamples';
import RefDom from './components/Ref/RefDom';
 

function App() {

  const [userData , setUserData] = useState([]);

  console.log(userData , "App Log");
  
  return (
    <>
      <AuthNavbar/>
    <Routes>
      <Route path='/' element={<Login data={userData}/>} />
      <Route path='/dash' element={<Dashboard/>} />
      <Route path='/register' element={<Register data={userData} setData = {setUserData}/>} />
      <Route path='/useRef' element={<RefExamples/>}/>
      <Route path='/useRefDom' element={<RefDom/>}/>

    </Routes>
    </>
  );
}

export default App;
