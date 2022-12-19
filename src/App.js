import './App.css';
import Azkar from './components/Azkar/Azkar';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState(0);
  const toggleTap = (index) => {
    setTab(index);
  }
  return (
    <div className="App">
      <ul className='mainTabs'>
        <li className={tab === 1 ? 'activeTab' : 'tab'} onClick={()=>toggleTap(1)}>الأذكار</li>
        <li className={tab === 2 ? 'activeTab' : 'tab'} onClick={()=>toggleTap(2)}>القرآن الكريم</li>
        <li className={tab === 3 ? 'activeTab' : 'tab'} onClick={()=>toggleTap(3)}>الاحاديث</li>
        <li className={tab === 4 ? 'activeTab' : 'tab'} onClick={()=>toggleTap(4)}>تسبيح</li>
      </ul>
      <div className={tab === 1 ? 'active' : 'content'}>
        <Azkar />
      </div>
    </div>
  );
}

export default App;
