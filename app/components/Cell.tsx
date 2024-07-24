import React, { Dispatch, SetStateAction } from 'react'

type CellProps = {
  index:number,
  go:string,
  setGo:Dispatch<SetStateAction<string>>,
  cells:string[],
  setCells:Dispatch<SetStateAction<string[]>>,
  cell:string,
  winningMessage:string
}

const Cell = ({go,setGo,index,cells,setCells,cell,winningMessage}:CellProps) => {

  const handleClick=(e:any)=>{
    if(winningMessage) return
    const taken = cells[index]
    if(taken==''){
      if (go==='circle') {
        handleCellChange("circle")  
        setGo("cross")    
      }else if(go==='cross'){
        handleCellChange("cross")
        setGo("circle")    
      }
}
  
}
  const handleCellChange=(cellToChange:string)=>{
    let copyCells =[...cells]
    copyCells[index] = cellToChange
    setCells(copyCells)
  }
  return (
    <div className='square' onClick={handleClick}>
      <div className={cell}>{cell? (cell==="circle" ? "O":"X"):""}</div>
    </div>
  )
}

export default Cell