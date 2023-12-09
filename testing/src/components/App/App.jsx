import List from '../List';
import './App.css';
import { useState, useEffect } from "react"
import Search from '../Search/Search';

const data = [ 
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'REACT',
  'Vue',
  'ANGULAR',
  'NodeJS'
]

function App() {

  const [search, setSearch] = useState('')
  const [items , setItems] = useState(data)

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
  }, [search]);

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>Find course:</Search>
        <List items={items}/>
      </div>
    </div>
  );
}

export default App;
