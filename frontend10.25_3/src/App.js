import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(()=>{
    document.title=`Kattintások száma: ${clickCount}`;
    console.log(clickCount)
  },[clickCount]);

  return (
    <div className='card w-25'>
      Kattintások száma: {clickCount}
      <button
      className='btn btn-primary'
      onClick={()=>{
        setClickCount((elozo)=>elozo+1);
      }}>
KATTINTS
      </button>
    </div>
  );
}

export default App;
