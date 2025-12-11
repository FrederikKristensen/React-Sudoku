import React from 'react'

const Grid = () => {
    // creating the new board
    const newboard = Array(9).fill(null)
    // puts in the new board
    const board = newboard.map(() => Array(9).fill(null));

    // same as board
    const newpuzzle = Array(9).fill(null)
    const puzzle = newpuzzle.map(() => Array(9).fill(null));

  return (
    <div className="container">
        <div className="tabel">
            <tbody>
                {board.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                const isPrefilled = puzzle[rowIndex][cellIndex] !== null;
                            })}
                        </tr>
                    )
                })}
                
            </tbody>
        </div>
    </div>
  )
}

export default Grid