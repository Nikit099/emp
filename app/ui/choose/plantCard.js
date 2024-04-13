import plantSmall from "@/public/choose/plant-small.png"
import Image from "next/image";


export default function PlantCard ({type, title, chooseClick, id, choosedId}) {

    return (
    <div onClick={() => chooseClick(id)} className={id === choosedId ? 'choosedPlant_card' : 'plant-cart '}>
        <div className="top"></div>
        <Image
            src={plantSmall}
            className="plant-small"
            alt={`plant-small`}
            />
            <img src="./media/plant-small.png" alt="" className="plant-small"/>
        <dl>
            <dt className="typePlant">{type}</dt>
            <dd className="titlePlant">{title}</dd>
        </dl>
        {/* <img src="./media/fire.svg" alt="fire" className="fire"/>
        <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
        <img src="./media/drops.svg" alt="drops" className="drops"/> */}
    </div>
    ) 
    }