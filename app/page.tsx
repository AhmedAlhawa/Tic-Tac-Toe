"use client"
import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],

]
export default function Home() {
  const [cells,setCells]=useState(['','','','','','','','',''])
  const [go,setGo]=useState('circle');
  const [winningMessage,setWinningMessage]=useState("")
  
  useEffect(()=>{
    winningCombos.forEach((combo)=>{
    // check for each element in one combo ([0,1,2]) if the cell of index 0 ==='circle' and if 1 and 2 then circle wins  
      const circleWins = combo.every((cell)=>cells[cell] === 'circle')
      const crossWins = combo.every((cell)=>cells[cell] === 'cross')
      if(circleWins){
        setWinningMessage("Circle Wins")
      }else if(crossWins){
        setWinningMessage('Cross Wins')
      }
    })
  } , [cells] )

  useEffect(()=>{
    if((cells.every((cell)=>cell !=='') && !winningMessage))
      setWinningMessage("Draw")
  },[winningMessage])

    const refreshFunction = () => {
      window.location.reload()
    }
  return (
    <div className="container">
      <button onClick={refreshFunction}>Refresh</button>
      <div className="gameBoard">
        {cells.map((cell,index)=>
        (<Cell 
          key={index} 
          go={go}
          setGo={setGo} 
          index={index} 
          cells={cells} 
          setCells={setCells} 
          cell={cell}
          winningMessage={winningMessage}
          />)
        )}
       
      </div>
      <div>
          {winningMessage}
      </div>
      <div >
         {!winningMessage && <p>{`this is : ${go} turn`}</p>}
      </div>
      
    </div>
  );
}
