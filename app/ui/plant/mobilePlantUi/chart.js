
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Link from 'next/link';
import FortmChart from "./formChart";
import { useEffect, useState } from "react";
import { usePlantsStore } from "@/app/store/zustand";
export default function Chart({id}) {
    const [nameForm, setNameForm] = useState([
        {name: 'Температура воздуха', key: 'temperatureDay', choice: true},
        {name: 'Влажность почвы', key: 'humidityDay', choice: false} , 
        {name: 'Влажность воздуха', key: 'airHumDay', choice: false},
        {name: 'Освещение', key: 'illuminationDay', choice: false } 
    ])
    
    const [dayPlant, setDayPlant] = useState()
    const [dayData, setDayData] = useState()
    const {dayHistory} = usePlantsStore()
    useEffect(() => {
        const common = dayHistory.filter(elem => elem.plantId == id)[0]
        const data =  nameForm.filter(e => e.choice === true)[0]['key']
        setDayData(dayHistory.filter(elem => elem.plantId == id)[0][data])
        setDayPlant(common)
    }, [])
    function changeChart(keyPf) {
        // console.log(dayPlant[keyPf]);
        const newNameForm = nameForm.map(e => e.key === keyPf ? {...e, choice: true} : {...e, choice: false})
      const data =  newNameForm.filter(e => e.choice === true)[0]['key']
        
        setNameForm(newNameForm)
        setDayData(dayPlant[data])
        // const data = nameForm.map(e => e.key === keyPf ? {...e, choice: true} : {...e, choice: false})
    }
   
    return (
<div className="footer_plant__left_mob">
    {
        dayPlant && <>
        
        <div className="footer_plant__left_title_block_mob">
                                    <span className="footer_plant__left_title_mob" >История ухода</span>
                                    <Link className="footer_plant__left_button" href={'/dashboard'}><button >Подробнее</button> </Link> 
                                </div>
                                <div className="footer_plant__left_radio_block">
                                    <form className="footer_plant__left_radio_form_mob">
                                        {nameForm.map(e => <FortmChart changeChart={changeChart} key={e.key} keyPf={e.key} choice={e.choice} name={e.name}/>)}
                                    </form>
                                </div>
                                <Line data={{
                                        labels: ['1 января', '2 января', '3 января', '4 января', '5 января', '6 zdf'],
                                        datasets: [{
                                            data: dayData,
                                            fill: false,
                                            borderColor: 'rgb(73, 133, 83)',
                                            tension: 0.3
                                        }],
                                            }}
                                        options={{
                                            width: "600",
                                            height: "250",
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
                                    
                                </>
    }
                            </div>
    ) 
    }