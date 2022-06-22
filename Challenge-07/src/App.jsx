import logo from './logo.svg';
// import './App.css';
import HomePage from './pages/Home'
import SearchCars from './pages/Cars'
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='/cars' element={<SearchCars />}></Route>
      </Routes>
    </div>
  );
}

export default App;
