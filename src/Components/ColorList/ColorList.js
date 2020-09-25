import React from 'react';
import './colors';
import './ColorList.scss'



function Color(props){
  return(
    <div className='colorContainer' style={{'background':`linear-gradient(${props.obj.deg}deg,#${props.obj.grad_1},#${props.obj.grad_2})`}}>
    <span style={{'color':props.obj.color}}>{props.obj.name} :
    <span className='desc'> {props.obj.grad_1} &#8594; {props.obj.grad_2}</span></span>
    </div>
  )
}

export default function ColorList(){

  return(
    <div id='colorList'>
    {colors.map(obj => <Color obj={obj} />)}
    </div>
  )
}