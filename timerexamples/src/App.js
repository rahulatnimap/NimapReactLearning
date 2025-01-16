import logo from './logo.svg';
import './App.css';
import TimeOut from './components/TimeOut';
import IntervalOut from './components/IntervalOut';
import FormValidation from './components/FormValidation';
import PropDisplay from './components/props/PropDisplay';
 

function App() {
  const UserData = [
    {
      name : "ankit",
      role : "Eng",
      age : 30
    },
    {
      name : "Ankur",
      role : "Driver",
      age : 21
    },
    {
      name : "Deepak",
      role : "Smoker",
      age : 45
    }
  ]
  return (
    <>
    {/* <TimeOut/>
    <IntervalOut/>
    <FormValidation/> */}
<PropDisplay data = {UserData}/>
    </>
  );
}

export default App;
