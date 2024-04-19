import Image from "next/image";
import potsSmileFace from "@/public/main/pots-smile-face.svg"
import potsPlant from "@/public/main/pots-plant.svg"
import Link from "next/link";
import { usePlantsStore } from "@/app/store/zustand";
import Emotion from "@/app/scripts/emotion";

export default function PlantDashboardPlusMenu({name, recomendate, typeId, id, emotion, closePlantChoose}) {
     const typePlants = usePlantsStore((state) => state.typePlants);
     
    return (
     <Link
     href={`#`}
     onClick={closePlantChoose}>
        <div className="plantchoose__myplants_point-1">
            
             <div className="plantchoose__myplants_top"></div>
             <Image className="plantchoose__myplants_pots__plant"
                  src={potsPlant}
                  alt="plant" />
             <Image className="plantchoose__myplants_pots__plant-face" 
                  src={potsSmileFace} 
                  alt="plant face" />
             <dl className="plantchoose__myplants_pots__dl">
                  <dt className="plantchoose__myplants_pots__dt">{name}</dt>
                  <dd className="plantchoose__myplants_pots__dd-1">{typePlants.filter(elem => elem.id === typeId)[0].type}</dd>
                  <dd className="plantchoose__myplants_pots__dd-2">{recomendate}</dd>
             </dl>
             <div className="plantchoose__myplants_icons">
                  {/* <img className="plantchoose__myplants_fire"
                       src="./media/fire.svg"
                       alt="fire"></img>
                  <img className="plantchoose__myplants_sunrise"
                       src="./media/sunrise.svg"
                       alt="sunrise"></img>
                  <img className="plantchoose__myplants_drops"
                       src="./media/drops.svg"
                       alt="drops"></img>
                  <img className="plantchoose__myplants_battery"
                       src="./media/battery.svg"
                       alt="battery"></img> */}
             </div>
             <div className="plantchoose__myplants_graf"></div>
        </div>
        </Link>

    )
}