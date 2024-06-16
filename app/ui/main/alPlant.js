import Image from "next/image";
import notifyPlant from "@/public/main/notify-plant.svg"
import snow from "@/public/main/snow.svg"
import plantFaceSick from "@/public/main/plant-face-sick.svg"
import Link from "next/link";
import fire from "@/public/main/fire.svg"
import drops from "@/public/main/drops.svg"
import battery from "@/public/main/battery.svg"
import sunrise from "@/public/main/sunrise.svg"
export default function AlPlant({name, recomendate, img, emotion, id}) {
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
                         width={220}
                         height={220}
                         alt="plant"/ >
                    <Image className="plant-face-sick" 
                         src={plantFaceSick}
                         alt="plant face sick"/ >
                    <Image className="snow"
                         alt="snow" 
                         src={snow}/>
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