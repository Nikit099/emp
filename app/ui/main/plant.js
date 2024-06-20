import Image from "next/image";
import potsSmileFace from "@/public/main/pots-smile-face.svg"
import potsPlant from "@/public/main/pots-plant.svg"
import fire from "@/public/main/fire.svg"
import drops from "@/public/main/drops.svg"
import battery from "@/public/main/battery.svg"
import sunrise from "@/public/main/sunrise.svg"
import Link from "next/link";
import { usePlantsStore } from "@/app/store/zustand";
import Emotion from "@/app/scripts/emotion";

export default function Plant({name, recomendate, typeId, img, id, emotion}) {
     const typePlants = usePlantsStore((state) => state.typePlants);
     const typePlant = typePlants.filter(elem => elem.id === typeId)[0]
    return (
     <Link
     href={`/${id}/plant`}>
        <div className="point-1">
            
             <div className="top"></div>
             <Image className="pots__plant"
                  src={img}
                  alt="plant" 
                  width={typePlant.bigWidth - (typePlant.bigWidth * 72 / 100)}
                  height={typePlant.bigHeight - (typePlant.bigHeight * 72 / 100)}
                  />
            
             <dl className="pots__dl">
                  <dt className="pots__dt">{name}</dt>
                  <dd className="pots__dd-1">{typePlant.type}</dd>
                  <dd className="pots__dd-2">{recomendate}</dd>
             </dl>
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
             <div className="graf"></div>
        </div>
        </Link>

    )
}