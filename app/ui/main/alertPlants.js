import Image from "next/image";
import AlPlant from "./alPlant";
import arrowRightCircle from "@/public/main/arrow-right-circle.svg"
import { usePlantsStore } from "@/app/store/zustand";

export default function AlertPlants({serchPlants}) {
    // const plants = usePlantsStore((state) => state.plants);

    return (
        <>
        <div className="arrows">
               <div className="arrow-left">
                    <Image src={arrowRightCircle} alt="arrow"/>
               </div>
               <div className="arrow-right">
                    <Image src={arrowRightCircle} alt="arrow"/>
               </div>
          </div>
          <section className="notify">
          {
            serchPlants.map( (e) => 
            e.alert && <AlPlant key={e.id} recomendate={e.recomendate} name={e.name}  emotion={e.emotion} /> 
        )
        
        }
          </section>
          </>
    )
}