import Image from "next/image";
import potsSmileFace from "@/public/main/pots-smile-face.svg"
import potsPlant from "@/public/main/pots-plant.svg"
import Link from "next/link";

export default function Plant({name, recomendate, type, id, emotion}) {

    return (
    
        <div className="point-1">
            <Link
            href={`/${id}/plant`}>
             <div className="top"></div>
             <Image className="pots__plant"
                  src={potsPlant}
                  alt="plant" />
             <Image className="pots__plant-face" 
                  src={potsSmileFace} 
                  alt="plant face" />
             <dl className="pots__dl">
                  <dt className="pots__dt">{name}</dt>
                  <dd className="pots__dd-1">{type}</dd>
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
             </Link>
        </div>
   
    )
}