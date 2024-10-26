import './App.css';
import Quizapp from './Quizapp';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path = '/' element = {<Quizapp />} />
      </Routes>

      
    </div>
  );
}

export default App;
