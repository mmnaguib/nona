import './App.css';
import { Routes,Route } from 'react-router';
import Surah from './components/Quran/Surah';
import Home from './components/Home';
import Quran from './components/Quran/Quran';
import Azkar from './components/Azkar/Azkar'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route element={<Home />} path='/' />
        <Route element={<Quran />} path='/quran' />
        <Route element={<Surah />} path='/quran/surah/:number' />
        <Route element={<Azkar />} path='/azkar'/>
      </Routes>

      
    </div>
  );
}

export default App;
