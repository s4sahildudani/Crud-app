
import './App.css';
import {Routes ,Route} from 'react-router-dom';
import Login from './pages/Login';
import Tabledata from './pages/Tabledata';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/tabledata" element={<Tabledata />} />
      </Routes>
    </div>
  );
}

export default App;
