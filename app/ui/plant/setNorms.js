'use client'
import Image from "next/image";
import plant from '@/public/plant/plant.png';
import questionCircle from '@/public/plant/question-circle.svg'
import LineNorms from "./lineNorms";
import { usePlantsStore } from "@/app/store/zustand";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
let scale = 47
export default function SetNorms({id,plant}) {
    const {customNorms,  typePlants} = usePlantsStore()
    const [typePlant, setTypePlant] = useState()
    function findNorms(){
        let objNorm
        objNorm = customNorms.find(e => {
            if (e.plantId ==  id){
                return e
            }
            } )
            return objNorm
    }
    useEffect(()=>{
        if (plant){
            const typePlant = typePlants.filter(elem => elem.id === plant.typeId)[0]
            setTypePlant(typePlant)
        }
       
    }, [plant])
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
                {
                    typePlant && <Image className="norms_plant__plant"
                    src={plant.img}
                    width={typePlant.bigWidth - (typePlant.bigWidth * scale / 100)}
                    height={typePlant.bigHeight - (typePlant.bigHeight * scale / 100)}
                    alt='Растение'></Image>
                }
                
            </div>
        </div>
    </div>

    ) 
    }