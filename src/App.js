import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
