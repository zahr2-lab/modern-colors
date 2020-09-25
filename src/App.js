import React from "react";
import "./style.css";
import ColorList from './Components/ColorList/ColorList';
import Search from './Components/Search/Search'


export default function App() {
  return (
    <div>
      <h1> &#9735; Search a Color &#9735;</h1>
      <Search  />
      <ColorList />
    </div>
  );
}
