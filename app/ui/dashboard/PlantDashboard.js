import arrowShowDown from '@/public/dashboard/arrow_show_down.svg';
import arrowShowUp from '@/public/dashboard/arrow_show_up.svg';
import deleteDashboard from '@/public/dashboard/delete.svg';

import Problems from './problems';
import Chart from './chart';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

import { useGroupe, usePlantsStore } from '@/app/store/zustand';


export default function PlantDashboard ({ flagGroupe,
                                          openCalendar,
                                          openProblems,
                                          plantId,
                                          groupeId,
                                        }) {


                                            

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


   const plantWeight = data.filter(e => e.plantId == plant.id)[0].weight;


   /*Вес растения ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

   return (
        <>
            <section className={ flagGroupe ? "dashboard" : "dashboard--hidden"}>
                    <div className="dashboard__container">
                        <div className="dashboard__header">
                            <div className="dashboard__header_left">
                                <span className="dashboard__title">{plantName}</span>
                                
                                <span className="dashboard__weigh">{`${plantWeight}кг`}</span>
                                <div>
                                    {(
                                        currentData.humidityProblems.length ||
                                        currentData.temperatureProblems.length ||
                                        currentData.illuminationProblems.length ||
                                        currentData.airHumProblems.length
                                        ) ? (
                                            <button className="dashboard__button" onClick={openProblems}>
                                            Проблемы
                                        </button>
                                    ) : null}
                                </div>
                                {/* <div className="dashboard__calendar"
                                     onClick={openCalendar}>
                                     <Image className="calendar" src={calendar} alt="календарь"/>
                                    </div> */}
                                <div className='dashboard__show_background'
                                    onClick={changeArrowBlock}>
                                    <svg className={`dashboard__show ${flagBlock ? 'rotated' : ''}`} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.1304 12.3787L27.1305 12.3785C27.8302 11.6788 27.8302 10.5444 27.1305 9.84472C26.4308 9.14503 25.2964 9.14503 24.5967 9.84472L24.9503 10.1983L24.5967 9.84472L16.1078 18.3336C15.7987 18.6428 15.2974 18.6428 14.9882 18.3336L6.40253 9.74791C5.70284 9.04822 4.56842 9.04822 3.86873 9.74791C3.16905 10.4476 3.16905 11.582 3.86873 12.2817L12.4512 20.8641C14.1592 22.5722 16.9284 22.5728 18.6372 20.8653L27.1304 12.3787Z" fill="#498553" stroke="#498553"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="dashboard__header_right">
                                <div className='dashboard__delete_background'>
                                    <Image className="dashboard__delete" 
                                            src={deleteDashboard} 
                                            alt="удалить дашборд"
                                            onClick={() => {deleteBlock(plantId, groupeId)}}/>
                                </div>
                            </div>
                        </div>
                    <div className={flagBlock ? "dashboard__blocks" : "dashboard__blocks--hidden"}>
                        <Chart  type={'illumination'}
                                plantId={plantId}/>
                        <Chart  type={'temperature'}
                                plantId={plantId}/>
                        <Chart  type={'humidity'}
                                plantId={plantId}/>
                        <Chart  type={'airHum'}
                                plantId={plantId}/>                        
                    </div>
                </div>
            </section>
        </>
    )
}