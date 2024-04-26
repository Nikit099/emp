import Image from "next/image";
import potsSmileFace from "@/public/main/pots-smile-face.svg"
import potsPlant from "@/public/main/pots-plant.svg";
import { usePlantsStore } from "@/app/store/zustand";
import Emotion from "@/app/scripts/emotion";

export default function PlantDashboardPlusMenu({name, 
                                                recomendate, 
                                                typeId, 
                                                id, 
                                                emotion, 
                                                closePlantChoose,
                                                handleAddBlock}) {
     const typePlants = usePlantsStore((state) => state.typePlants);
     
    return (
     <div>
        <div className="plantchoose__myplants_point-1" onClick={handleAddBlock}>
            
             <div className="plantchoose__myplants_top"></div>
             <Image className="plantchoose__myplants_pots__plant"
                  src={potsPlant}
                  alt="plant" />
             <Image className="plantchoose__myplants_pots__plant-face" 
                  src={potsSmileFace} 
                  alt="plant face" />
             <dl className="plantchoose__myplants_pots__dl">
                  <dt className="plantchoose__myplants_pots__dt">{name}</dt>
                  <dd className="plantchoose__myplants_pots__dd-1">
                    {typePlants.find(elem => elem.id === typeId)?.type || 'Unknown Type'}
                  </dd>
                  <dd className="plantchoose__myplants_pots__dd-2">{recomendate}</dd>
             </dl>
        </div>
        </div>

    )
}