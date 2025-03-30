import './App.scss';
import { BoardWrapper } from './components/Board/BoardWrapper';

function App() {
  return (
    <div className="App">
      <nav></nav>
      <h1 className="navbar-board">To do list board</h1>
      <BoardWrapper />
    </div>
  );
}

export default App;
