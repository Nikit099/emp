import Image from "next/image";
import potsSmileFace from "@/public/main/pots-smile-face.svg"
import potsPlant from "@/public/main/pots-plant.svg"
import Link from "next/link";
import { usePlantsStore } from "@/app/store/zustand";
import Emotion from "@/app/scripts/emotion";

export default function Plant({name, recomendate, typeId, id, emotion}) {
     const typePlants = usePlantsStore((state) => state.typePlants);
    return (
     <Link
     href={window.innerWidth >= 658 ?  `/${id}/plant` : '/'}>
        <div className="point-1">
            
             <div className="top"></div>
             <Image className="pots__plant"
                  src={potsPlant}
                  alt="plant" />
             <Image className="pots__plant-face" 
                  src={potsSmileFace} 
                  alt="plant face" />
             <dl className="pots__dl">
                  <dt className="pots__dt">{name}</dt>
                  <dd className="pots__dd-1">{typePlants.filter(elem => elem.id === typeId)[0].type}</dd>
                  <dd className="pots__dd-2">{recomendate}</dd>
             </dl>
             <div className="icons">
                  {/* <img className="fire"
                       src="./media/fire.svg"
                       alt="fire"></img>
                  <img className="sunrise"
                       src="./media/sunrise.svg"
                       alt="sunrise"></img>
                  <img className="drops"
                       src="./media/drops.svg"
                       alt="drops"></img>
                  <img className="battery"
                       src="./media/battery.svg"
                       alt="battery"></img> */}
             </div>
             <div className="graf"></div>
        </div>
        </Link>

    )
}