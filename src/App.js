import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StarshipsStops } from './components/starships-stops';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StarshipsStops/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
