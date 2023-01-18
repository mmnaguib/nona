import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <ul className='mainTabs'>
        <Link to={'/'} className='tab'>الرئيسية</Link>
        <Link to={'/azkar'} className='tab'>الأذكار</Link>
        <Link to={'/quran'} className='tab'>القرآن الكريم</Link>
        <Link to={'/talks'} className='tab'>الاحاديث</Link>
        <Link to={'/tasbih'} className='tab'>تسبيح</Link>
        </ul>
    </div>
  )
}

export default Navbar
