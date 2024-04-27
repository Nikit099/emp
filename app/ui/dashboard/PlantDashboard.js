import calendar from '@/public/dashboard/calendar.svg';
import emojiSick from '@/public/dashboard/emoji_sick.png'
import arrowShowDown from '@/public/dashboard/arrow_show_down.svg';
import arrowShowUp from '@/public/dashboard/arrow_show_up.svg';
import deleteDashboard from '@/public/dashboard/delete.svg';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

import '@/app/dashboard/page.css';

import { usePlantsStore } from "@/app/store/zustand";

export default function PlantDashboard ({ flagGroupe, 
                                          openProblems,
                                          openCalendar,
                                          name }) {


    const [chartData, setChartData] = useState({
        labels: ['1 января', '2 января', '3 января', '4 января', '5 января',],
        datasets: [{
            data: [65, 39, 40, 70, 50,],
            borderColor: 'rgb(73, 133, 83)',
            tension: 0.4,
        },]
        });

        useEffect(() => {
            const interval = setInterval(() => {
                // Проверяем последнюю метку в массиве
                const lastLabel = chartData.labels[chartData.labels.length - 1];
                
                // Проверяем, достигли ли мы '31 января'
                if (lastLabel === '31 января') {
                    clearInterval(interval); // Останавливаем интервал
                    return;
                }
        
                // Генерация случайных данных
                const newLabels = [...chartData.labels, `${chartData.labels.length + 1} января`]; // Создаем новый массив меток, добавляя новую метку
        
                const newData = {
                    labels: newLabels,
                    datasets: chartData.datasets.map(dataset => ({
                        ...dataset,
                        data: [...dataset.data, Math.floor(Math.random() * 100)] // Добавляем новое случайное значение в массив data для новой метки
                    }))
                };
                
                setChartData(newData);
            }, 1000); // Обновляем данные каждую секунду
                
            return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента или при достижении '31 января'
        }, [chartData]); // Зависимость от chartData, чтобы перезапустить интервал при изменении данных
        

    /*Фейковые данные^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

    const [flagBlock, setFlagBlock] = useState(true)
    function changeArrowBlock() {
        setFlagBlock(!flagBlock);
    }
   /*Раскрытие блока^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


    return (
        <section className={ flagGroupe ? "dashboard" : "dashboard--hidden"}>
                    <div className="dashboard__container">
                        <div className="dashboard__header">
                            <div className="dashboard__header_left">
                                <span className="dashboard__title">plantDashboard.js</span>
                                
                                <span className="dashboard__weigh">23кг</span>
                                <button className="dashboard__button"
                                        onClick={openProblems}>
                                    Возникшие проблемы
                                </button>
                                <div className="dashboard__calendar"
                                     onClick={openCalendar}>
                                    <Image className="calendar" src={calendar} alt="календарь"/>
                                </div>
                                <Image className="dashboard__show" src={ flagBlock ? arrowShowUp : arrowShowDown} alt="свернуть дашборд" onClick={changeArrowBlock}/>
                            </div>
                            <div className="dashboard__header_right">
                                <Image className="dashboard__delete" src={deleteDashboard} alt="удалить дашборд"/>
                            </div>
                        </div>
                    <div className={flagBlock ? "dashboard__blocks" : "dashboard__blocks--hidden"}>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__header-left">
                                    <div className="block__title">
                                        Освещение
                                    </div>
                                    <div className="block__parameter">
                                        772Lux
                                    </div>
                                    <div className="block__emotion">
                                        <Image className="" src={emojiSick} alt=""/>
                                    </div>
                                </div>
                                <div className="block__header-right">
                                    <div className="block__radio">
                                        <label>
                                            <input id='radio-1' className="day" name="radio" type="radio" />
                                            <div className="block__castom-radio radio-1">
                                                День
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-2' className="week" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-2">
                                                Неделя
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-3' className="month" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-3">
                                                Месяц
                                            </div> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="block__graph" id='myChart'> 
                                <Line data={chartData}
                                      options={{
                                            responsive: true,
                                            maintainAspectRatio: true,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                    labels: {
                                                        //color: 'rgb(255, 99, 132)'
                                                    }
                                                }
                                            }
                                        }}>
                                </Line>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__header-left">
                                    <div className="block__title">
                                        Освещение
                                    </div>
                                    <div className="block__parameter">
                                        772Lux
                                    </div>
                                    <div className="block__emotion">
                                        <Image className="" src={emojiSick} alt=""/>
                                    </div>
                                </div>
                                <div className="block__header-right">
                                    <div className="block__radio">
                                        <label>
                                            <input id='radio-1' className="day" name="radio" type="radio" />
                                            <div className="block__castom-radio radio-1">
                                                День
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-2' className="week" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-2">
                                                Неделя
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-3' className="month" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-3">
                                                Месяц
                                            </div> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="block__graph" id='myChart'> 
                                <Line data={{
                                        labels: ['1 января', '2 января', '3 января', '4 января', '5 января'],
                                        datasets: [{
                                            label: 'My First Dataset',
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                            fill: false,
                                            borderColor: 'rgb(73, 133, 83)',
                                            tension: 0.4
                                        }],
                                            }}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: true,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                    labels: {
                                                        //color: 'rgb(255, 99, 132)'
                                                    }
                                                }
                                            }
                                        }}>
                                </Line>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__header-left">
                                    <div className="block__title">
                                        Освещение
                                    </div>
                                    <div className="block__parameter">
                                        772Lux
                                    </div>
                                    <div className="block__emotion">
                                        <Image className="" src={emojiSick} alt=""/>
                                    </div>
                                </div>
                                <div className="block__header-right">
                                    <div className="block__radio">
                                        <label>
                                            <input id='radio-1' className="day" name="radio" type="radio" />
                                            <div className="block__castom-radio radio-1">
                                                День
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-2' className="week" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-2">
                                                Неделя
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-3' className="month" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-3">
                                                Месяц
                                            </div> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="block__graph" id='myChart'> 
                                <Line data={{
                                        labels: ['1 января', '2 января', '3 января', '4 января'],
                                        datasets: [{
                                            label: 'My First Dataset',
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                            fill: false,
                                            borderColor: 'rgb(73, 133, 83)',
                                            tension: 0.4
                                        }],
                                            }}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: true,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                    labels: {
                                                        //color: 'rgb(255, 99, 132)'
                                                    }
                                                }
                                            }
                                        }}>
                                </Line>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block__header">
                                <div className="block__header-left">
                                    <div className="block__title">
                                        Освещение
                                    </div>
                                    <div className="block__parameter">
                                        772Lux
                                    </div>
                                    <div className="block__emotion">
                                        <Image className="" src={emojiSick} alt=""/>
                                    </div>
                                </div>
                                <div className="block__header-right">
                                    <div className="block__radio">
                                        <label>
                                            <input id='radio-1' className="day" name="radio" type="radio" />
                                            <div className="block__castom-radio radio-1">
                                                День
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-2' className="week" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-2">
                                                Неделя
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio-3' className="month" name="radio" type="radio"/>
                                            <div className="block__castom-radio radio-3">
                                                Месяц
                                            </div> 
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="block__graph" id='myChart'> 
                                <Line data={{
                                        labels: ['1 января', '2 января', '3 января', '4 января'],
                                        datasets: [{
                                            label: 'My First Dataset',
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                            fill: false,
                                            borderColor: 'rgb(73, 133, 83)',
                                            tension: 0.4
                                        }],
                                            }}
                                        options={{
                                            responsive: true,
                                            maintainAspectRatio: true,
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                    labels: {
                                                        //color: 'rgb(255, 99, 132)'
                                                    }
                                                }
                                            }
                                        }}>
                                </Line>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}