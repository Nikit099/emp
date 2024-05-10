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
                                <div className='dashboard__show_background'>
                                    <Image className="dashboard__show" 
                                            src={ flagBlock ? arrowShowUp : arrowShowDown} 
                                            alt="свернуть дашборд" 
                                            onClick={changeArrowBlock}/>
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