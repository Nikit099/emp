'use client'
import Image from "next/image";
import plant from '@/public/plant/plant.png';
import questionCircle from '@/public/plant/question-circle.svg'
import rotate from '@/public/plant/rotate.svg';
import pen from '@/public/plant/pen.svg';
import LineNorms from "./lineNorms";
import { usePlantsStore } from "@/app/store/zustand";
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function SetNorms() {
    const castomNorms = usePlantsStore((state) => state.castomNorms);
    const pathname = usePathname()
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
    function findNorms(){
        let norms
        norms = castomNorms.find(e => {
            if (e.plantId ==  getUrlID()){
                return e
            }
            } )
            return norms
    }

    return (

        <div className="norms_plant">
        <div className="norms_plant__container">
            <div className="norms_plant__left">
                <div className="norms_plant__title_block">
                    <span className="norms_plant__title">Нормы</span>
                    <Image className="norms_plant__title_img"
                           src={questionCircle}
                           alt='Дополнительная информация'></Image>
                </div>
                <div className="norms_plant__main_block">
                    {
                        findNorms().norms.map( (elem) =>
                            <LineNorms name={elem.name} min={elem.min} max={elem.max} />

                        )
                    }

                  
                    
                </div>
            </div>
            <div className="norms_plant__right">
                <Image className="norms_plant__plant"
                       src={plant}
                       alt='Растение'></Image>
            </div>
        </div>
    </div>

    ) 
    }