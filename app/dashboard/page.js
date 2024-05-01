'use client';

import React, { useState } from 'react';

import "chart.js/auto";
import { Line } from "react-chartjs-2";

import PlantDashboard from '@/app/ui/dashboard/PlantDashboard';
import PlantChoose from '../ui/dashboard/choose';
import Problems from '../ui/dashboard/problems';
import Calendar from '../ui/dashboard/calendar';
import Groupe from '../ui/dashboard/groupe';

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

import { usePlantsStore } from '../store/zustand';
import { useGroupe } from '../store/zustand';
import { useBlock } from '../store/zustand';
import usePersist from '../store/usePersist';



export default function Dashboard() {

    const [inputValueGroupeName, setInputValueGroupeName] = useState('');

    const handleInputChangeGroupeName = (event) => {
        setInputValueGroupeName(event.target.value);
    };                                

    const [flagGroupe, setFlagGroupe] = useState(true)
    function changeArrowGroupe() {
        setFlagGroupe(!flagGroupe);
    }

    const [flagBlock, setFlagBlock] = useState(true)
    function changeArrowBlock() {
        setFlagBlock(!flagBlock);
    }
    //
    /*можно удалять. работает для примера^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    
    const {addBlock, addGroupe, dashboardGroupes } = useGroupe();
    const currentGroupesIds = dashboardGroupes.map(e => e.id);
    const [currentGroupeId, setCurrentGroupeId] = useState();
    const [isVisiblePlantChoose, setIsVisiblePlantChoose] = useState(false);

    // const openPlantChoose = (groupeId) => {
    //     setIsVisiblePlantChoose(true);
    //     console.log('currentGroupesIds:', currentGroupesIds, 'currentGroupeId:', currentGroupeId)
    //     setCurrentGroupeId(groupeId)
    // };

    // const closePlantChoose = () => {
    //     setIsVisiblePlantChoose(false);
    // };

    //

    const [isVisibleProblems, setIsVisibleProblems] = useState(false);

    const openProblems = () => {
        setIsVisibleProblems(true);
    };

    const closeProblems = () => {
        setIsVisibleProblems(false);
    };

    //
    
    const [isVisibleCalendar, setIsVisibleCalendar] = useState(false);

    const openCalendar = () => {
        setIsVisibleCalendar(true);
    };

    const closeCalendar = () => {
        setIsVisibleCalendar(false);
    };

    //

    function handleAddGroupe() {
        const newGroupe = { name: '', id: Date.now(), plantsId: []};
        addGroupe(newGroupe);
    }  

    //добавление группы ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //добавление блока ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    
    

    return (
    <>
    {isVisibleCalendar && <Calendar closeCalendar={closeCalendar}/>}
    {isVisibleProblems && <Problems/>}
    
    <div className={ 
                    isVisibleProblems || 
                    isVisibleCalendar ? 'body--blured' : 'body'}
         onClick={() => {isVisiblePlantChoose ? closePlantChoose() : console.log();
                         isVisibleProblems ? closeProblems() : console.log();
                         isVisibleCalendar ? closeCalendar() : console.log();}} >
    <header>
        <div className="header__container">
            <div className="header__back">
                <Image className="header__back_arrow" src={arrowBack} alt=""/>
                <Link className=""
                      href='/'>
                        <div className="header__home_button">Главная</div>
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
            {
                dashboardGroupes.map((e, index) => <Groupe key={e.id} 
                                                    groupeId={e.id}
                                                    name={e.name} 
                                                    plantsId={e.plantsId}
                                                    groupeIndex={index} 
                                                    flagGroupe={flagGroupe}  
                                                    openProblems={openProblems}
                                                    openCalendar={openCalendar}
                                                    dashboardGroupes={dashboardGroupes}
                                                    isVisiblePlantChoose={isVisiblePlantChoose}
                                                    currentGroupeId={currentGroupeId}
                                                    flagBlock={flagBlock} 
                                                    changeArrowBlock={changeArrowBlock} />)
            }
        </div>
    </main>
    <section className="section">
        <div className="section__container">
            <div className="section__block" onClick={handleAddGroupe}>
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