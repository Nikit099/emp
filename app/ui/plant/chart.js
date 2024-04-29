
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Link from 'next/link';
import FortmChart from "./formChart";
import { useState } from "react";
export default function Chart() {
    const [nameFrom, setNameForm] = useState(['Температура воздуха', 'Влажность почвы', 'Влажность воздуха', 'Освещение'])
    return (
<div className="footer_plant__left">
                                <div className="footer_plant__left_title_block">
                                    <span className="footer_plant__left_title" >История ухода</span>
                                    <Link href={'/dashboard'}><button className="footer_plant__left_button">Подробнее</button> </Link> 
                                </div>
                                <div className="footer_plant__left_radio_block">
                                    <form className="footer_plant__left_radio_form">
                                        {nameFrom.map(e => <FortmChart name={e}/>)}
                                    </form>
                                </div>
                                <div className="footer_plant__graph_block">
                                <Line data={{
                                        labels: ['1 января', '2 января', '3 января', '4 января', '5 января'],
                                        datasets: [{
                                            label: 'My First Dataset',
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                            fill: false,
                                            borderColor: 'rgb(73, 133, 83)',
                                            tension: 0.3
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
    ) 
    }