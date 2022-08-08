import React,{useState} from 'react';
import './App.css';

function App() {
  const [res,setRes]=useState("");
  const handleClick = (e)=>{
    setRes(res.concat(e.target.value));
  }

  const handleClear = ()=>{
    setRes("");
  }

  const handleResult = ()=>{
    setRes(eval(res).toString());
  }

  return (
    <>
    <div className='main_div'>
      <div className='row title'>Calculator</div>
      <div className='row'>
      <input type='text' value={res} className='text'/>
      <input type='button' value='C' onClick={handleClear} className='button_one'/>
      </div>

      <div className='row'>
      <input type='button' value='1' onClick={handleClick} className='button'/>
      <input type='button' value='2' onClick={handleClick} className='button'/>
      <input type='button' value='3' onClick={handleClick} className='button'/>
      <input type='button' value='/' onClick={handleClick} className='button_one'/>
      </div>

      <div className='row'>
      <input type='button' value='4' onClick={handleClick} className='button'/>
      <input type='button' value='5' onClick={handleClick} className='button'/>
      <input type='button' value='6' onClick={handleClick} className='button'/>
      <input type='button' value='-' onClick={handleClick} className='button_one'/>
      </div>

      <div className='row'>
      <input type='button' value='7' onClick={handleClick} className='button'/>
      <input type='button' value='8' onClick={handleClick} className='button'/>
      <input type='button' value='9' onClick={handleClick} className='button'/>
      <input type='button' value='+' onClick={handleClick} className='button_one'/> 
      </div>

      <div className='row'>
      <input type='button' value='.' onClick={handleClick} className='button'/>
      <input type='button' value='0' onClick={handleClick} className='button'/>
      <input type='button' value='=' onClick={handleResult} className='button'/>
      <input type='button' value='*' onClick={handleClick} className='button_one'/>
      </div>
  
    </div>
    
    </>
 
  );
}

export default App;
