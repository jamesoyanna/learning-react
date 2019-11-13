import React from 'react';
import './Person.css';
const person = (props)=>{
 return (
<div className="Person">
<h4 onClick={props.click}>I am {props.name} and my age {props.age} </h4>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value ={props.name} />
</div>
 )  

}    
export default person;