import React from 'react';
import './Search.scss'

export default function Search(props){
  return(
    <>
      <input id='searchbox' placeholder='Search field &#8252;' value={props.name} onChange={e=>props.setName(e.target.value)} />
    </>
    )
}