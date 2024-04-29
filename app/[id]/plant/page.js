'use client'
import './page.css'

import SetNorms from "@/app/ui/plant/setNorms";
import Seeds from "@/app/ui/plant/seeds";
import { useEffect, useState } from "react";
import { usePlantsStore } from "@/app/store/zustand";
import { usePathname } from "next/navigation";
import HeadPlant from "@/app/ui/plant/headPlant";
import MobilePlant from "@/app/ui/plant/mobilePlant";
import Chart from '@/app/ui/plant/chart';

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
                            <Chart/>
                            
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