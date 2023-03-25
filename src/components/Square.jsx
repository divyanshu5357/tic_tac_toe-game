import React from 'react';
import "./Square.css";

export const Square = (props) => {
  return (
    <div className='Square' onClick={props.onClick}>
        <h1>{props.value}</h1>
    </div>
  )
}
