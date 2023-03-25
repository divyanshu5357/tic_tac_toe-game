import React, { useState } from 'react'
import  {Square}  from './Square'

export const Board = () => {
  const [state,setState] = useState(Array(9).fill(null))
  const [isXTurn,setXTurn] = useState(true)
  const handleClick=(index)=>{
    if(state[index] !== null){
      return;
    }
    const copyState = [...state]
    copyState[index] = isXTurn? "X" : "0"
    setState(copyState)
    setXTurn(!isXTurn)
}
  const checkWinner=()=>{
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let items of winnerLogic){
      const [a,b,c] = items
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        return state[a] + "Won"
      }
    }if (!state.includes(null)) {
      return "draw";
    }
    return false
  }
  const isWin = checkWinner()
  const gameReset =() =>{
    setState(Array(9).fill(null))
  }
  return (
    <div className="board-container">
        {isWin ? (<h1>{isWin} 
        <button onClick={gameReset}>Play Again</button>
        </h1>) : (<>
          <h3 style={{textAlign:"center"}}>{isXTurn ? "X" : "0"} TURN PLEASE MOVE</h3>
          <div className="board-row">
            
            <Square value={state[0]} onClick={()=>handleClick(0)}/>
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square value={state[2]} onClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
        <Square value={state[3]} onClick={()=>handleClick(3)}/>
        <Square value={state[4]} onClick={()=>handleClick(4)}/>
        <Square value={state[5]} onClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
        <Square value={state[6]} onClick={()=>handleClick(6)}/>
        <Square value={state[7]} onClick={()=>handleClick(7)}/>
        <Square value={state[8]} onClick={()=>handleClick(8)}/>
        </div>
        </>)}
    </div>

  )
}
