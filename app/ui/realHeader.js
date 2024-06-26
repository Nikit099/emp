
import React, { useState } from 'react';

import '../../app/page.scss';
import Link from "next/link";
import magnifyyingGlass from "@/public/main/magnifying-glass.svg"
import Search from "./search";
import plus from "@/public/main/plus.svg"

import RealHeaderSidePanel from './main/realHeaderSidePanel';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function RealHeader ({main, handleChange}) {
    
    const [showSidePanel, setSidePanel] = useState(false);
    const pathname = usePathname()

    const handleSidePanel = () => {
        setSidePanel(!showSidePanel);
    };

    
    return (
    <>
    {showSidePanel && <RealHeaderSidePanel handleSidePanel={handleSidePanel}/>}
    { main ? (<div className='main-header__wrapper'>
        <header className='main-header'>
            <nav className='main-header__nav'>
                <ul>
                    <li>
                        <Link href={'/'}>Главная</Link>
                    </li>
                    <div className='main-header__dot'></div>
                    <li>
                        <Link href={'/almanach'}>Альманах</Link>
                    </li>
                    <div className='main-header__dot'></div>
                    <li>
                        <Link href={'/setting'}>Настройки</Link>
                    </li>
                    <div className='main-header__dot'></div>
                    <li>
                        <Link href={'/dashboard'}>Статистика</Link>
                    </li>
                    {
                        pathname.includes('/setting') ? <li>
                        <Link href={'#'}>Настройки</Link>
                    </li> : pathname.includes('/almanach') ?  <li>
                        <Link href={'#'}>Альманах</Link>
                    </li> : !pathname[1] ? <li>
                        <Link href={'#'}>Главная</Link>
                    </li> : <></>
                    }
                    
                    <div className="main-header__search-header">
                         <Image className="main-header__magnifying-glass"
                              src={magnifyyingGlass} 
                              alt="лупа"/>
                              <Search handleChange={handleChange}  placeholder={'Найти'} stl={'search_main'} />
                    </div>
                    
                    {/* <li>
                        <Link href={'#'}>Главная</Link>
                    </li> */}
                    <svg className='main-header__menu_svg' 
                         onClick={handleSidePanel}
                         width="21" 
                         height="26" 
                         viewBox="0 0 21 26" 
                         fill="none" 
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 6.5C19.7332 6.5 20.125 6.98503 20.125 7.58333C20.125 8.18164 19.7332 8.66667 19.25 8.66667H1.75C1.26675 8.66667 0.875 8.18164 0.875 7.58333C0.875 6.98502 1.26675 6.5 1.75 6.5L19.25 6.5Z" fill="#888888"/>
                        <path d="M19.25 11.9167C19.7332 11.9167 20.125 12.4017 20.125 13C20.125 13.5983 19.7332 14.0833 19.25 14.0833H1.75C1.26675 14.0833 0.875 13.5983 0.875 13C0.875 12.4017 1.26675 11.9167 1.75 11.9167H19.25Z" fill="#888888"/>
                        <path d="M20.125 18.4167C20.125 17.8184 19.7332 17.3333 19.25 17.3333H1.75C1.26675 17.3333 0.875 17.8184 0.875 18.4167C0.875 19.015 1.26675 19.5 1.75 19.5H19.25C19.7332 19.5 20.125 19.015 20.125 18.4167Z" fill="#888888"/>
                    </svg>
                </ul>
            </nav>
            {
                main &&
                    <div className="search-header">
                         <Image className="magnifying-glass"
                              src={magnifyyingGlass} 
                              alt="лупа"/>
                              <Search handleChange={handleChange}  placeholder={'Найти'} stl={'search_main'} />
                    </div>
                   
            }
            {
                main &&
                <Link href={'/choose'}>
                <button className="header__button">
                     <Image className="plus"
                          src={plus}
                          alt="plus"/>
                     <div>Растение</div>
                </button>
                </Link>
            }
            <hr></hr>
        </header>
    </div>
    ) : (
        <div className='real-header__wrapper'>
        <header className='real-header'>
            <nav className='real-header__nav'>
                <ul>
                    <li>
                        <Link href={'/'}>Главная</Link>
                    </li>
                    <div className='real-header__dot'></div>
                    <li>
                        <Link href={'/almanach'}>Альманах</Link>
                    </li>
                    <div className='real-header__dot'></div>
                    <li>
                        <Link href={'/setting'}>Настройки</Link>
                    </li>
                    <div className='real-header__dot'></div>
                    <li>
                        <Link href={'/dashboard'}>Статистика</Link>
                    </li>
                    {
                        pathname.includes('/setting') ? <li>
                        <Link href={'#'}>Настройки</Link>
                    </li> : pathname.includes('/almanach') ?  <li>
                        <Link href={'#'}>Альманах</Link>
                    </li> : !pathname[1] ? <li>
                        <Link href={'#'}>Главная</Link>
                    </li> : pathname.includes('/dashboard') ?
                    <li>
                    <Link href={'/dashboard'}>Статистика</Link>
                </li> : <></>
                    }
                    
                    
                    {/* <li>
                        <Link href={'#'}>Главная</Link>
                    </li> */}
                    <svg className='real-header__menu_svg' 
                         onClick={handleSidePanel}
                         width="21" 
                         height="26" 
                         viewBox="0 0 21 26" 
                         fill="none" 
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 6.5C19.7332 6.5 20.125 6.98503 20.125 7.58333C20.125 8.18164 19.7332 8.66667 19.25 8.66667H1.75C1.26675 8.66667 0.875 8.18164 0.875 7.58333C0.875 6.98502 1.26675 6.5 1.75 6.5L19.25 6.5Z" fill="#888888"/>
                        <path d="M19.25 11.9167C19.7332 11.9167 20.125 12.4017 20.125 13C20.125 13.5983 19.7332 14.0833 19.25 14.0833H1.75C1.26675 14.0833 0.875 13.5983 0.875 13C0.875 12.4017 1.26675 11.9167 1.75 11.9167H19.25Z" fill="#888888"/>
                        <path d="M20.125 18.4167C20.125 17.8184 19.7332 17.3333 19.25 17.3333H1.75C1.26675 17.3333 0.875 17.8184 0.875 18.4167C0.875 19.015 1.26675 19.5 1.75 19.5H19.25C19.7332 19.5 20.125 19.015 20.125 18.4167Z" fill="#888888"/>
                    </svg>
                </ul>
            </nav>
            <hr></hr>
        </header>
    </div>
    )}
    </>
    );
}