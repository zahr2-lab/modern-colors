import React, {useState} from "react";
import "./style.css";
import ColorList from './Components/ColorList/ColorList';
import Search from './Components/Search/Search'


export default function App() {
  const [name, setName] = useState('');

  return (
    <div id='container'>
      <h1> &#9735; Search a Color &#9735;</h1>
      <Search name={name} setName={setName}/>
      <ColorList name={name} />
    </div>
  );
}
