import logo from './logo.svg';
import { createContext, useEffect, useState } from 'react';
import './App.css';
import CompA from './CompA';

const firstName = createContext();
const lastName = createContext();


function App() {

  const [count, setCount] = useState(0);
  const [employee,setEmployees]=useState(["Pratik","Pokharel"]);
  const Increment = () => { alert('INCC'); setCount(count + 1) }

  useEffect(()=>{
  },[count])

 const onClickk=(name)=>{
  setEmployees(oldArray => [...oldArray, name]);
    console.log(employee);
  }


  return (
    <>
      <button onClick={() => { setCount(count + 1) }}>Clickme</button>
      <button onClick={() => { onClickk('ppp') }}>Click me2</button>
      {employee.map(name => (<li>{name}</li>))}
      <firstName.Provider value={"Pratik"}>
        <lastName.Provider value={"Pokharel"}>
          <CompA />
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
}

export default App;
export {firstName,lastName} ;