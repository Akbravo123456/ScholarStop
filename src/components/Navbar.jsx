import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {UserCircleIcon,HeartIcon,MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const Navbar = () =>{
    const[navState,setNavState]=useState(false);
    const dispatch =useDispatch();
}
const onNavScroll=()=>{
    if(window.scrollY > 30){
        setNavState(true);
    } else{
        setNavState(false);
    }
}
useEffect (()=>{
    window.addEventListener('scroll',onNavScroll);

    return()=>{
        window.removeEventListener('scroll',onNavScroll);
    }
},[]);

return(
    <>
    <header className={!navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'}>
    <nav className='flex items-center justify-between nike-container'>
        <div className='flex items-center'>
            <img
            src={Logo} 
            alt="Logo/img"
            className={`w-16 h-auto ${navState && "filter brightness-0"}`}/>
             <ul className='flex items-center justify-center gap-2'>
             <li className='grid items-center'>
             <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
             </li>
             <li className='grid items-center'>
             <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
             </li>
             <li className='grid items-center'>
             <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                <UserCircleIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
             </button>

             </li>
             </ul>
        </div>
    </nav>
    </header>
    </>
)