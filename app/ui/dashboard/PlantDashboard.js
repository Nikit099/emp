import calendar from '@/public/dashboard/calendar.svg';
import emojiSick from '@/public/dashboard/emoji_sick.png'
import arrowShowDown from '@/public/dashboard/arrow_show_down.svg';
import arrowShowUp from '@/public/dashboard/arrow_show_up.svg';
import deleteDashboard from '@/public/dashboard/delete.svg';

import Problems from './problems';
import Chart from './chart';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

import '@/app/dashboard/page.css';
import { useGroupe, usePlantsStore } from '@/app/store/zustand';


export default function PlantDashboard ({ flagGroupe,
                                          openCalendar,
                                          plantsIdIndex,
                                          plantId,
                                          groupeId,
                                        }) {


                                            
    const {dayHistory, weekHistory, monthHistory} = usePlantsStore();
    
    const [humiditySelectedOption, setHumiditySelectedOption] = useState('day');
    const humidityDayData = dayHistory.filter(e => e.plantId == plantId)[0]?.humidityDay;
    const humidityWeekData = weekHistory.filter(e => e.plantId == plantId)[0]?.humidityWeek;
    const humidityMonthData = monthHistory.filter(e => e.plantId == plantId)[0]?.humidityMonth;
    const humidityData = humiditySelectedOption === 'day' ? humidityDayData :
    humiditySelectedOption === 'week' ? humidityWeekData : humidityMonthData;

    const [temperatureSelectedOption, setTemperatureSelectedOption] = useState('day');
    const temperatureDayData = dayHistory.filter(e => e.plantId == plantId)[0]?.temperatureDay;
    const temperatureWeekData = weekHistory.filter(e => e.plantId == plantId)[0]?.temperatureWeek;
    const temperatureMonthData = monthHistory.filter(e => e.plantId == plantId)[0]?.temperatureMonth;
    const temperatureData = temperatureSelectedOption === 'day' ? temperatureDayData :
    temperatureSelectedOption === 'week' ? temperatureWeekData : temperatureMonthData;

    const [airHumSelectedOption, setAirHumSelectedOption] = useState('day');
    const airHumDayData = dayHistory.filter(e => e.plantId == plantId)[0]?.airHumDay;
    const airHumWeekData = weekHistory.filter(e => e.plantId == plantId)[0]?.airHumWeek;
    const airHumMonthData = monthHistory.filter(e => e.plantId == plantId)[0]?.airHumMonth;
    const airHumData = airHumSelectedOption === 'day' ? airHumDayData :
    airHumSelectedOption === 'week' ? airHumWeekData : airHumMonthData;

    const [illuminationSelectedOption, setIlluminationSelectedOption] = useState('day');
    const illuminationDayData = dayHistory.filter(e => e.plantId == plantId)[0]?.illuminationDay;
    const illuminationWeekData = weekHistory.filter(e => e.plantId == plantId)[0]?.illuminationWeek;
    const illuminationMonthData = monthHistory.filter(e => e.plantId == plantId)[0]?.illuminationMonth;
    const illuminationData = illuminationSelectedOption === 'day' ? illuminationDayData :
    illuminationSelectedOption === 'week' ? illuminationWeekData : illuminationMonthData;
   /*Данные чарта^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


    const [flagBlock, setFlagBlock] = useState(false)
    function changeArrowBlock() {
        setFlagBlock(!flagBlock);
    }
   /*Раскрытие блока^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const { plants } = usePlantsStore();
    const plant = plants.find(plant => plant.id === plantId);

    const plantName = plant.name;

   /*Имя блока^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

   const { deleteBlock } = useGroupe();
   
   /*Удаление блока^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const { data } = usePlantsStore();
    const currentData = data.filter(e => e.plantId == plant.id)[0];

   /*Отображение кнопки проблем ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

   const [isVisibleProblems, setIsVisibleProblems] = useState(false);

   const openProblems = () => {
       setIsVisibleProblems(true);
   };

   const closeProblems = () => {
       setIsVisibleProblems(false);
   };

   /*Отображение проблем^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    return (
        <>
        {isVisibleProblems && <Problems/>}
            <section className={ flagGroupe ? "dashboard" : "dashboard--hidden"}>
                    <div className="dashboard__container">
                        <div className="dashboard__header">
                            <div className="dashboard__header_left">
                                <span className="dashboard__title">{plantName}</span>
                                
                                <span className="dashboard__weigh">23кг</span>
                                <div>
                                    {(
                                        currentData.humidityProblems.length ||
                                        currentData.temperatureProblems.length ||
                                        currentData.illuminationProblems.length ||
                                        currentData.airHumProblems.length
                                        ) ? (
                                            <button className="dashboard__button" onClick={openProblems}>
                                            Возникшие проблемы!
                                        </button>
                                    ) : null}
                                </div>
                                {/* <div className="dashboard__calendar"
                                     onClick={openCalendar}>
                                     <Image className="calendar" src={calendar} alt="календарь"/>
                                    </div> */}
                                <Image className="dashboard__show" 
                                        src={ flagBlock ? arrowShowUp : arrowShowDown} 
                                        alt="свернуть дашборд" 
                                        onClick={changeArrowBlock}/>
                            </div>
                            <div className="dashboard__header_right">
                                <Image className="dashboard__delete" 
                                        src={deleteDashboard} 
                                        alt="удалить дашборд"
                                        onClick={() => {deleteBlock(plantId, groupeId)}}/>
                            </div>
                        </div>
                    <div className={flagBlock ? "dashboard__blocks" : "dashboard__blocks--hidden"}>
                        <Chart type={'illumination'}
                                plantId={plantId}/>
                        <Chart type={'temperature'}
                                plantId={plantId}/>
                        <Chart type={'humidity'}
                                plantId={plantId}/>
                        <Chart type={'airHum'}
                                plantId={plantId}/>                        
                    </div>
                </div>
            </section>
        </>
    )
}