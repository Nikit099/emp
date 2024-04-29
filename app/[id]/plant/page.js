'use client'
import Image from "next/image";
import './page.css'
import plant from '@/public/plant/plant.png';

import arrowBack from '@/public/plant/arrow-back.svg';
import checkCircle from '@/public/plant/check-circle.svg';
import graph from '@/public/plant/graph.png';
import pen from '@/public/plant/pen.svg';
import questionCircle from '@/public/plant/question-circle.svg'
import rotate from '@/public/plant/rotate.svg';
import SetNorms from "@/app/ui/plant/setNorms";
import Seeds from "@/app/ui/plant/seeds";
import { useEffect, useState } from "react";
import { usePlantsStore } from "@/app/store/zustand";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeadPlant from "@/app/ui/plant/headPlant";
import MobilePlant from "@/app/ui/plant/mobilePlant";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
export default function Plant() {
const [namePlant, setNamePlant] = useState('')
const [plant, setPlant] = useState({})
const pathname = usePathname()
const {changeName, plants} = usePlantsStore()

function getUrlID(){
    let plantId = ''
    for (let i = 1; i < pathname.length; i++ ){
        if(pathname[i] !== '/'){
            plantId = plantId + pathname[i]
        }
        else{
            break
        }
    }
  return  plantId 
}
const id = getUrlID()
useEffect(() => {
    const getPlant = plants.filter(e => e.id == id )
    setPlant(getPlant[0])
  }, []);

function submitNamePlant(e) {
    e.preventDefault()
    setPlant({...plant, name: namePlant})
    changeName(namePlant, id)
    setNamePlant('')
    
}

    return (
        
    <>
        <div className="plant">
            <div className="wrapper_plant">
                <div className="plant__backgraund_circles">
                    <div className="circle_1"></div>
                    <div className="circle_2"></div>
                    <div className="circle_3"></div>
                </div>
                <HeadPlant plant={plant} id={id}/>
                <SetNorms id={id}/>
                <div className="footer_plant__wrapper">
                    <div className="footer_plant">
                        <div className="footer_plant__container">
                            <div className="footer_plant__left">
                                <div className="footer_plant__left_title_block">
                                    <span className="footer_plant__left_title" >История ухода</span>
                                    <Link href={'/dashboard'}><button className="footer_plant__left_button">Подробнее</button> </Link> 
                                </div>
                                <div className="footer_plant__left_radio_block">
                                    <form className="footer_plant__left_radio_form">
                                        <label>
                                            <input id='radio_1' className="day" name="radio" type="radio" />
                                            <div className="radio_form__left_radio radio_1">
                                                Температура воздуха
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio_2' className="week" name="radio" type="radio"/>
                                            <div className="radio_form__left_radio radio_2">
                                                Влажность почвы
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio_3' className="month" name="radio" type="radio"/>
                                            <div className="radio_form__left_radio radio_3">
                                                Влажность воздуха
                                            </div> 
                                        </label>
                                        <label>
                                            <input id='radio_4' className="month" name="radio" type="radio"/>
                                            <div className="radio_form__left_radio radio_4">
                                                Освещение
                                            </div> 
                                        </label>
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
                            
                                <Seeds id={id} namePlant={namePlant} submitNamePlant={submitNamePlant} setNamePlant={setNamePlant}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobilePlant/>
    </>
    )
}