import Image from "next/image";
import notifyPlant from "@/public/main/notify-plant.svg"
import snow from "@/public/main/snow.svg"
import plantFaceSick from "@/public/main/plant-face-sick.svg"
import Link from "next/link";
import fire from "@/public/main/fire.svg"
import drops from "@/public/main/drops.svg"
import battery from "@/public/main/battery.svg"
import sunrise from "@/public/main/sunrise.svg"
import { usePlantsStore } from "@/app/store/zustand";
export default function AlPlant({name, recomendate, img,typeId, emotion, id}) {
    
     const typePlants = usePlantsStore((state) => state.typePlants);
     const typePlant = typePlants.filter(elem => elem.id === typeId)[0]
    return (
     <Link
     href={`/${id}/plant`}>
<div className="point-1">
                    <div className="dot"></div>
                    <div className="top-rectangl"></div>
                    <dl className="point__dl">
                        <dt className="point__dt">{name}</dt>
                        <dd className="point__dd">{recomendate}</dd>
                    </dl>
                    <Image className="notify__plant"
                         src={img} 
                         width={typePlant.bigWidth - (typePlant.bigWidth * 80 / 100)}
                         height={typePlant.bigHeight - (typePlant.bigHeight * 80 / 100)}
                         alt="plant"/ >
                   
                    
                    <div className="icons">

                    <Image className="fire" 
                  src={fire} 
                  alt="fire" />
                  
                  <Image className="sunrise"
                       src={sunrise}
                       alt="sunrise"></Image>
                  <Image className="drops"
                       src={drops}
                       alt="drops"></Image>
                  <Image className="battery"
                       src={battery}
                       alt="battery"></Image>
                    </div>
               </div>
               </Link>
    )
}