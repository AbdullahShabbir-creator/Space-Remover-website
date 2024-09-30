import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Clicker from './components/useref';
import MyComponent from './components/MyComponent';

import React,{ useState } from 'react'


function App() {
    const[mode, setMode]=useState("light")
    const togleMode=()=>{
     if(mode ==='dark'){
      setMode('light')
      document.body.style.backgroundColor ='white'
     }
     else{
      setMode('dark')
      document.body.style.backgroundColor ='black'
     }
    
    }
    // const [count, setCount] = useState(0);
    const [text, setText] = useState('Hello');
  return (
    <>
    <Navbar title='TextUtiles' aboutText='About Us' mode={mode} togleMode={togleMode}></Navbar>
    <TextForm mode={mode} togleMode={togleMode}></TextForm>
    <div className='container'>
    <Clicker></Clicker>
    </div>
    <div className='container'>
      <h1>React.memo Example</h1>
      <button className='btn btn-primary' onClick={() => setText(text === 'Hello' ? 'World' : 'Hello')}>Change Text</button>
      <MyComponent value={text} onClick={() => alert('Button clicked!')} />
    </div>
    </>
  );

}
export default App;







