'use client'
import Image from "next/image";
import plant from '@/public/plant/plant.png';
import questionCircle from '@/public/plant/question-circle.svg'
import LineNorms from "./lineNorms";
import { usePlantsStore } from "@/app/store/zustand";
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function SetNorms({id,plant}) {
    const customNorms = usePlantsStore((state) => state.customNorms);
    const pathname = usePathname()
    
    function findNorms(){
        let objNorm
        objNorm = customNorms.find(e => {
            if (e.plantId ==  id){
                return e
            }
            } )
            return objNorm
    }
    const objNorm = findNorms()
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
                            <LineNorms key={elem.name} id={objNorm.id} plantId={objNorm.plantId}  objNorms={objNorm.norms} name={elem.name} min={elem.min} max={elem.max} />

                        )
                    }

                  
                    
                </div>
            </div>
            <div className="norms_plant__right">
                <Image className="norms_plant__plant"
                       src={plant.img}
                       width={400}
                       height={400}
                       alt='Растение'></Image>
            </div>
        </div>
    </div>

    ) 
    }