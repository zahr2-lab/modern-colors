import React, {useState} from 'react';
import './colors';
import './ColorList.scss'



function Color(props){
  const [style,setStyle]=useState(0)

  return(
    <div className={style==0? 'colorContainer':'fullScreen'} onClick={()=>setStyle(!style)} style={{'background':`linear-gradient(${props.obj.deg}deg,#${props.obj.grad_1},#${props.obj.grad_2})`}}>
    <span style={{'color':props.obj.color}}>{props.obj.name} :
    <span className='desc'> {props.obj.grad_1} &#8594; {props.obj.grad_2}</span></span>
    </div>
  )
}

export default function ColorList(props){

  return(
    <div id='colorList'>
    {colors.filter(data => props.name === null? data : data.name.toLowerCase().includes(props.name.toLowerCase())).map(obj => <Color obj={obj} key={obj.name} />)}
    </div>
  )
}