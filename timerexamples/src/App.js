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
 

function App() {
  const UserData = [
    {
      mail : "ankit@nimap",
      pass : "123",
      name : "ankit",
      role : "Eng",
      age : 30
    },
    {
      mail : "anukur@nimap",
      pass : 123,
      name : "Ankur",
      role : "Driver",
      age : 21
    },
    {
      mail : "deepak@nimap",
      pass : 123,
      name : "Deepak",
      role : "Smoker",
      age : 45
    }
  ]
  return (
    <>
      <AuthNavbar/>
    <Routes>
      <Route path='/' element={<Login data={UserData}/>} />
      <Route path='/dash' element={<Dashboard/>} />
      <Route path='/register' element={<Register/>} />

    </Routes>
    </>
  );
}

export default App;
