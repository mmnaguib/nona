import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/quran.css';
const Quran = () => {
    const [surah, setSurah] = useState([]);
    useEffect(()=>{
        fetch('http://api.alquran.cloud/v1/meta')
        .then((res) => res.json())
        .then((data) => setSurah(data.data.surahs.references));
    },[])
  return (
    <div className='quranSurah'>
        {surah.map(surah => 
        <div className='surah' key={surah.number}>
            <Link to={`/quran/surah/${surah.number}`}>{surah.name}</Link>
        </div> )}
    </div>
  )
}

export default Quran
