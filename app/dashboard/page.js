'use client';

import React, { useState } from 'react';

import "chart.js/auto";
import { Line } from "react-chartjs-2";

import PlantDashboard from '../ui/dashboard/PlantDashboard';
import PlantChoose from '../ui/dashboard/PlantChoose';
import Problems from '../ui/dashboard/problems';

import './page.css';
import Image from 'next/image';
import Link from "next/link";

import magnifyingGlass from '../../public/dashboard/search.svg';
import arrowBack from '../../public/dashboard/arrow_back.svg';
import plus from '../../public/dashboard/plus.svg';
import arrowShowDown from '../../public/dashboard/arrow_show_down.svg';
import deleteDashboard from '../../public/dashboard/delete.svg';
import arrowShowUp from '../../public/dashboard/arrow_show_up.svg';
import calendar from '../../public/dashboard/calendar.svg';
import emojiSick from '../../public/dashboard/emoji_sick.png';



export default function Dashboard() {

    const [flagGroupe, setFlagGroupe] = useState(true)
    function changeArrowGroupe() {
        setFlagGroupe(!flagGroupe);
    }

    //
    
    const [flagBlock, setFlagBlock] = useState(true)
    function changeArrowBlock() {
        setFlagBlock(!flagBlock);
    }
    
    //
    
    const [inputValueGroupeName, setInputValueGroupeName] = useState('');
    
    const handleInputChangeGroupeName = (event) => {
      setInputValueGroupeName(event.target.value);
    };

    //

    const [isVisiblePlantChoose, setIsVisiblePlantChoose] = useState(false);

    const openPlantChoose = () => {
        setIsVisiblePlantChoose(true);
    };

    const closePlantChoose = () => {
        setIsVisiblePlantChoose(false);
    };

    //

    const [isVisibleProblems, setIsVisibleProblems] = useState(false);

    const openProblems = () => {
        setIsVisibleProblems(true);
    };

    const closeProblems = () => {
        setIsVisibleProblems(false);
    };
    

    return (
    <>
    {isVisibleProblems && <Problems/>}
    {isVisiblePlantChoose && <PlantChoose closePlantChoose={closePlantChoose}/>}
    <div className={isVisiblePlantChoose || isVisibleProblems ? 'body--blured' : 'body'}
         onClick={() => {isVisiblePlantChoose ? closePlantChoose() : console.log();
                         isVisibleProblems ? closeProblems() : console.log()}} >
    <header className="header">
        <div className="header__container">
            <div className="header__back">
                <Image className="header__back_arrow" src={arrowBack} alt=""/>
                <Link className="header__home_button"
                      href='/'>
                    Главная
                </Link>
            </div>
            <div className="header__search">
                <input className="header__search_input"
                       type="search"
                       placeholder="Поиск по группам" />
                <Image className="header__search_img" src={magnifyingGlass} alt='лупа'/>
            </div>
        </div>
    </header>
    <main className=".main">
        <div className="main__container">
            <div className="main__block">
                <div className="main__sides">
                    <div className="main__block_left">
                        <input
                            className="main__title"
                            type="text"
                            value={inputValueGroupeName}
                            onChange={handleInputChangeGroupeName}
                            placeholder='Ваше имя группы'
                            maxLength={16}
                            
                        />
                        <div className="main__search">
                            <input className="main__search_input"
                                   
                                   placeholder="Поиск по растениям" />
                            <Image className="main__search_img" src={magnifyingGlass} alt='лупа'/>
                        </div>
                        <div className="main__add"
                             onClick={openPlantChoose}>
                            <Image className="main__plus" 
                                   src={plus} 
                                   alt="добавить растение"
                                    />
                        </div>
                            <Image className={"main__show"} src={ flagGroupe ? arrowShowUp : arrowShowDown } alt="развернуть группу" onClick={changeArrowGroupe}/>
                        
                    </div>
                    <div className="main__block_right">
                        <Image className="main__delete" src={deleteDashboard} alt="удалить группу"/>
                    </div>
                </div>
                <PlantDashboard flagGroupe={flagGroupe} 
                                flagBlock={flagBlock} 
                                changeArrowBlock={changeArrowBlock} 
                                openProblems={openProblems}/>
            </div>
        </div>
    </main>
    <section className="section">
        <div className="section__container">
            <div className="section__block">
                <span className="section__title">
                    Новая группа
                </span>
            </div>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        
    </script>
</div>
    </>    
    ) }