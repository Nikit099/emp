import calendar from '@/public/dashboard/calendar.svg';
import emojiSick from '@/public/dashboard/emoji_sick.png'
import arrowShowDown from '@/public/dashboard/arrow_show_down.svg';
import arrowShowUp from '@/public/dashboard/arrow_show_up.svg';
import deleteDashboard from '@/public/dashboard/delete.svg';

import { usePlantsStore } from '@/app/store/zustand';
import React, {useState} from 'react';
import Image from "next/image";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart ({type,
                                plantId,
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
                                    
    return(
        <>
        <div className="block">
            <div className="block__header">
                <div className="block__header-left">
                    <div className="block__title">
                        {type}
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
                            <input  id='radio-1' 
                                    className="day" 
                                    name={`illumination ${plantId}`} 
                                    type="radio"
                                    checked={illuminationSelectedOption === 'day'}
                                    onChange={() => setIlluminationSelectedOption('day')}/>
                            <div className="block__castom-radio radio-1">
                                День
                            </div> 
                        </label>
                        <label>
                            <input id='radio-2' 
                                    className="week" 
                                    name={`illumination ${plantId}`}  
                                    type="radio"
                                    onChange={() => setIlluminationSelectedOption('week')}/>
                            <div className="block__castom-radio radio-2">
                                Неделя
                            </div> 
                        </label>
                        <label>
                            <input id='radio-3' 
                                    className="month" 
                                    name={`illumination ${plantId}`}  
                                    type="radio"
                                    onChange={() => setIlluminationSelectedOption('month')}/>
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
                                    label: 'Освещение',
                                    data: illuminationData,
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
        </>
    )
}