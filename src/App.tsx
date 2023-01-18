import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<Movie/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
