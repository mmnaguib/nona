import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Counter from '../Counter';
import '../../assets/style/azkar.css';
const Azkar = () => {
    const [toggleState, setToggleState] = useState(1);
    const [moring,setMoring] = useState([]);
    const [night,setNight] = useState([]);
    const toggleTap = (index) => {
        setToggleState(index);
    }
    useEffect(() => {
        axios.get('https://mmnaguib.github.io/azkar/morning.json').then((res) => {
            setMoring(res.data.morning);
        }).catch(err => {
            console.log(err);
        });
    },[])

    useEffect(() => {
        axios.get('https://mmnaguib.github.io/azkar/night.json').then((res) => {
            setNight(res.data.night);
        }).catch(err => {
            console.log(err);
        });
    },[])
  return (
    <>
        <ul className='azkarUl'>
            <li className={toggleState === 1 ? 'activeTab' : 'tab'} onClick={()=>toggleTap(1)}>أذكار الصباح</li>
            <li className={toggleState === 2 ? 'activeTab' : 'tab'} onClick={()=>toggleTap(2)}>أذكار المساء</li>
            <li className={toggleState === 3 ? 'activeTab' : 'tab'} onClick={()=>toggleTap(3)}>أذكار النوم</li>
        </ul>
        <div className={toggleState === 1 ? 'activeContent' : 'content'}>
            {moring.map(zekr => 
            <div className='monringText' key={zekr.id}>
                <p>{zekr.text}</p>
                <Counter number={zekr.number} />
            </div> )}
        </div>
        <div className={toggleState === 2 ? 'activeContent' : 'content'}>
            {night.map(zekr => 
            <div className='nightText' key={zekr.id}>
                <p>{zekr.text}</p>
                <Counter number={zekr.number} />
            </div> )}
        </div>
    </>
  )
}

export default Azkar
