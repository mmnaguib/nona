import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router';
import { Link  } from 'react-router-dom';
import '../../assets/style/surah.css';
const Surah = () => {
  const [ayaht, setAyah] = useState([]);
  const [ayahCon, setAyahCon] = useState([]);
  let {number} = useParams();
  useEffect(()=>{
      fetch('https://api.alquran.cloud/v1/surah/' + number)
      .then((res) => res.json())
      .then((data) => setAyah(data.data.ayahs));
  },[number])
  useEffect(()=>{
      fetch('https://api.alquran.cloud/v1/surah/' + number)
      .then((res) => res.json())
      .then((data) => setAyahCon(data.data));
  },[number])
  
  return (
    <>
      <div className="surahContent">
        <div>رقم السورة : {ayahCon.number}</div>
        <div>اسم السورة : {ayahCon.name}</div>
        <div>اسم السورة بالانجليزية : {ayahCon.englishName}</div>
        <div>عدد آيات السورة : {ayahCon.numberOfAyahs}</div>
        <div>مكان النزول : {ayahCon.revelationType}</div>
        <div>الصفحات : من &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; الي</div>
      </div>
      <div className='ayahs'>
      <Link to={`/surah/${number}/1/3`}>عرض</Link>
          {ayaht.map((ayah,i) => 
          <span className='ayah' key={ayah.number}>
              <span className='ayahCon'>{ayah.text} </span><span className='ayahNumber'>{ayah.numberInSurah}</span>
            <b className='pageFrom'> {i === 0 ? + ayah.page : ''}</b><b className='pageTo'> {i === ayaht.length-1 ? + ayah.page : ''}</b>
          </span> )}
      </div>
      <div className='btns'>
      {+number !== 1 ? <Link to={`/quran/surah/${+number-1}`} onClick={()=>window.scrollTo(0,0)}>السابق</Link>: '' }
      {+number !== 114 ? <Link to={`/quran/surah/${+number+1}`} onClick={()=>window.scrollTo(0,0)}>التالي</Link>: ''}
      </div>
    </>
  )
}

export default Surah
