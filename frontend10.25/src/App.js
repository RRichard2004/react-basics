import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="border">
      Dobozok-App
      <BoxComponent hatterszin="red" szelesseg="150px" magassag="150px" szamlalo={0}/>
      <BoxComponent hatterszin="green" szelesseg="200px" magassag="200px" szamlalo={2}/>
      <BoxComponent hatterszin="cyan" szelesseg="100px" magassag="100px" szamlalo={4}/>
    </div>
  );
}

function BoxComponent(props) {
  const [aktualErtek, ujAkrualErtek] = useState(props.szamlalo);
  return (
    <div
      style={{
        width: props.szelesseg,
        height: props.magassag,
        backgroundColor: props.hatterszin,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      className='m-5 rounded'
      onClick={() => {
        ujAkrualErtek((elozoAllapot) => elozoAllapot + 1);
      }}
    >
      <h1 className='text-center'>{aktualErtek}</h1>
    </div>
  );
}

export default App;
