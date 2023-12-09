import List from '../List';
import './App.css';
import { useState, useEffect } from "react"

const data = [ 
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'REACT',
  'VUE',
  'ANGULAR',
  'NodeJS'
]

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <List items={data}/>
      </div>
    </div>
  );
}

export default App;
