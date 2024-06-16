import Image from "next/image";
import AlPlant from "./alPlant";
import arrowRightCircle from "@/public/main/arrow-right-circle.svg"
import { usePlantsStore } from "@/app/store/zustand";
import Carusel from "./carusel";
import { useState } from "react";
const PAGE_WIDTH = 265

export default function AlertPlants({serchPlants, plants}) {
      const [offset, setOffset] = useState(0)
      const handleClickLeft = () => {
          setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH
            return Math.min(newOffset, 0)
          })
        }
        const handleClickRight = () => {
          setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (plants.filter(elem => elem.alert === true).length - 1))
            console.log()
            return Math.max(newOffset, maxOffset)
          })
        }
    return (
        <>
        <div className="arrows">
               <div className="arrow-left">
                    <Image src={arrowRightCircle} onClick={handleClickRight} alt="arrow"/>
               </div>
               <div className="arrow-right">
                    <Image src={arrowRightCircle} onClick={handleClickLeft} alt="arrow"/>
               </div>
          </div>
          <section className="notify">
               <Carusel offset={offset} >
          {
            serchPlants.map( (e) => 
            e.alert && <AlPlant img={e.img} key={e.id} id={e.id} recomendate={e.recomendate} name={e.name}  emotion={e.emotion} /> 
        )
        
        }</Carusel>
          </section>
          </>
    )
}