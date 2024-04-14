import Image from "next/image";
import notifyPlant from "@/public/main/notify-plant.svg"
import snow from "@/public/main/snow.svg"
import plantFaceSick from "@/public/main/plant-face-sick.svg"

export default function AlPlant({name, recomendate, emotion}) {
    return (
<div className="point-1">
                    <div className="dot"></div>
                    <div className="top-rectangl"></div>
                    <dl className="point__dl">
                        <dt className="point__dt">{name}</dt>
                        <dd className="point__dd">{recomendate}</dd>
                    </dl>
                    <Image className="notify__plant"
                         src={notifyPlant} 
                         alt="plant"/ >
                    <Image className="plant-face-sick" 
                         src={plantFaceSick}
                         alt="plant face sick"/ >
                    <Image className="snow"
                         alt="snow" 
                         src={snow}/>
                    <div className="icons">
                         {/* <img className="battery"
                              src="./media/battery.svg" 
                              alt="battery"/>
                         <img className="fire"
                              src="./media/fire.svg" 
                              alt="fire"/>
                         <img className="sunrise"
                              src="./media/sunrise.svg" 
                              alt="sunrise"/>
                         <img className="drops"
                              src="./media/drops.svg" 
                              alt="drops"/> */}
                    </div>
               </div>
    )
}