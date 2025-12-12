import './App.css';
import Grid from './components/Grid'

function App() {
    // creating the new board
    const board = Array(9)
      .fill(null)
      .map(() => Array(9).fill(null));

    // creating puzzle
    const puzzle = Array(9)
      .fill(null)
      .map(() => Array(9).fill(null));

  return (
    <div style={{textAlign:'center'}}>
      <h1>Sudoku</h1>
      <Grid board={board} puzzle={puzzle}/>
    </div>
  );
}

export default App
