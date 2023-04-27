import './App.css';
import Launch from './Launch';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={< Launch />} />
    </Routes>
    // <div className="App">
    //   <h1>Test 123</h1>>
    
    // </div>
  );
}

export default App;
