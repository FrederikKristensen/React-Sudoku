import React from 'react'
import '../App.css'

const Grid = ( board , puzzle ) => {


  return (
    <div className="container">
        <table className="table">
            <tbody>
                {board.map((row, rowIndex) => {
                    return (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => {
                                const isPrefilled = puzzle[rowIndex][cellIndex] !== null;
                                return (
                                    <td key={cellIndex} className='cell'>
                                        <input 
                                            type="text" 
                                            maxLength={1}
                                            value={cell === null ? '' : cell}
                                            readOnly={isPrefilled}
                                            onFocus={() => {}}
                                            onClick={() => {}}
                                            onChange={() => {}}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
  );
};

export default Grid;