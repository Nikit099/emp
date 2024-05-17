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
import './page.scss';
import Image from 'next/image';
import Link from "next/link";

import magnifyingGlass from '../../public/dashboard/search.svg';
import arrowBack from '../../public/dashboard/arrow_back.svg';
import home from '@/public/dashboard/home.svg';

import { usePlantsStore } from '../store/zustand';
import { useGroupe } from '../store/zustand';
import { useBlock } from '../store/zustand';
import usePersist from '../store/usePersist';



export default function Dashboard() {

    const { addGroupe, dashboardGroupes } = useGroupe();

    const [isVisibleProblems, setIsVisibleProblems] = useState(false);

    const openProblems = () => {
        setIsVisibleProblems(true);
    };
 
    const closeProblems = () => {
        setIsVisibleProblems(false);
    };
    
    /*Отображение проблем^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    const {data} = usePlantsStore();
    function handleAddProblems(plantId) {
        const currentPlant = data.find(e => e.plantId == plantId)
        const problemsWithTemperature = currentPlant.temperatureProblems[0];
        console.log(problemsWithTemperature);
    }


    //добавление проблем ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    
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
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };
    
    
    /*Поиск по группам^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const goBack = () => {
        window.history.back();
      };
    
    /*Кнопка назад^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    

    return (
    <>
    {isVisibleCalendar && <Calendar closeCalendar={closeCalendar}/>}
    {isVisibleProblems && <Problems closeProblems={closeProblems}/>}
    

    
    <div className={ 
                    isVisibleProblems || 
                    isVisibleCalendar ? 'body--blured' : 'body'}
         onClick={() => {
                         isVisibleProblems ? closeProblems() : null;
                         isVisibleCalendar ? closeCalendar() : null;}} >
    <header>
        <div className="header__container">
            <div className="header__back">
                <div className='header__back_arrow_block'>
                    <Image className="header__back_arrow" 
                            src={arrowBack} 
                            alt="назад"
                            onClick={goBack}/>   
                </div>
                <Link className=""
                      href='/'>
                        <div className="header__home_button">Главная</div>
                        <Image className='header__home_img'
                                src={home}></Image>
                </Link>
            </div>
            <div className="header__search">
                <input className="header__search_input"
                       type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Поиск по группам"
                         />
                <Image className="header__search_img" 
                        src={magnifyingGlass} 
                        alt='лупа'/>
            </div>
        </div>
    </header>
    <main className=".main">
    <div className="main__container">
        {dashboardGroupes
            .filter(group => group.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((e, index) => (
                <Groupe
                    key={e.id} 
                    groupeId={e.id}
                    name={e.name} 
                    plantsId={e.plantsId}
                    groupeIndex={index}   
                    openProblems={openProblems}
                    openCalendar={openCalendar}
                    dashboardGroupes={dashboardGroupes}
                    //isVisiblePlantChoose={isVisiblePlantChoose}
                    //currentGroupeId={currentGroupeId} 
                />
            ))}
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