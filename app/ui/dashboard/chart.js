import calendar from '@/public/dashboard/calendar.svg';
import emojiSick from '@/public/dashboard/emoji_sick.png';
import noImage from '@/public/dashboard/no_image.png';

import { usePlantsStore } from '@/app/store/zustand';
import React, {useState} from 'react';
import Image from "next/image";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart ({type,
                                plantId,
                                }) {


    const {dayHistory, 
            weekHistory, 
            monthHistory, 
            customNorms,
            data,} = usePlantsStore();

    const name = {
        illumination: 'Освещение',
        temperature: 'Температура',
        humidity: 'Влажность почвы',
        airHum: 'Влажность воздуха',
    };

    
    const [typeSelectedOption, setTypeSelectedOption] = useState('day');
    const typeData = typeSelectedOption === 'day' ? dayHistory.find(e => e.plantId === plantId)?.[`${type}Day`] :
    typeSelectedOption === 'week' ? weekHistory.find(e => e.plantId === plantId)?.[`${type}Week`] :
    monthHistory.find(e => e.plantId === plantId)?.[`${type}Month`];
    
    const maxDataExtention = (customNorms.find(e => e.plantId == plantId))?.norms.find(e => e.name == type).max
    const minDataExtention = (customNorms.find(e => e.plantId == plantId))?.norms.find(e => e.name == type).min
    const maxData = maxDataExtention ? maxDataExtention : 100;
    const minData = minDataExtention ? minDataExtention : 0;
    
    /*Данные чарта^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    
    
    const humidityCurrentState = data.filter(e => e.plantId == plantId)[0]?.[`${type}`];
    
    /*Отображение эмоции^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    
    const parameter = {
        illumination: 'Lux',
        temperature: '°C',
        humidity: '%',
        airHum: '%',
    };
    
    /*Отображение данных^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    
    return(
        <>
        <div className="block">
            <div className="block__header">
                <div className="block__header-left">
                    <div className="block__title">
                        {name[type]}
                    </div>
                    <div className="block__parameter">
                        {`${humidityCurrentState}${parameter[type]}`}
                    </div>
                    <div className="block__emotion">
                        <Image className="" 
                                src={humidityCurrentState > maxData || humidityCurrentState < minData 
                                    ? emojiSick : noImage} 
                                alt="Недовольное лицо"/>
                    </div>
                </div>
                <div className="block__header-right">
                    <div className="block__radio">
                        <label>
                            <input  id='radio-1' 
                                    className="day" 
                                    name={`${type} ${plantId}`} 
                                    type="radio"
                                    checked={typeSelectedOption === 'day'}
                                    onChange={() => setTypeSelectedOption('day')}/>
                            <div className="block__castom-radio radio-1">
                                День
                            </div> 
                        </label>
                        <label>
                            <input id='radio-2' 
                                    className="week" 
                                    name={`${type} ${plantId}`}  
                                    type="radio"
                                    onChange={() => setTypeSelectedOption('week')}/>
                            <div className="block__castom-radio radio-2">
                                Неделя
                            </div> 
                        </label>
                        <label>
                            <input id='radio-3' 
                                    className="month" 
                                    name={`${type} ${plantId}`}  
                                    type="radio"
                                    onChange={() => setTypeSelectedOption('month')}/>
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
                                    data: typeData,
                                    fill: false,
                                    borderColor: 'rgb(73, 133, 83)',
                                    tension: 0.4,
                                },{
                                    label: 'Максимальное нормальное значение',
                                    data: Array(typeData?.length).fill(maxData) ? Array(typeData?.length).fill(maxData) : 0,
                                    borderColor: 'rgb(254, 120, 118, 0.3)',
                                    tension: 0.4,
                                },{
                                    label: 'Минимальное нормальное значение',
                                    data: Array(typeData?.length).fill(minData) ? Array(typeData?.length).fill(minData) : 0,
                                    borderColor: 'rgb(254, 120, 118, 0.3)',
                                    tension: 0.4,
                                    backgroundColor: 'rgb(117, 214, 133, 0.13)',
                                    fill: '-1'
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