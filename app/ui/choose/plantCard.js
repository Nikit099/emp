import plantSmall from "@/public/choose/plant-small.png"
import Image from "next/image";


export default function PlantCard ({type, title, img, chooseClick, id, choosedId, handleIsVisible}) {

    return (
    <div onClick={() => {chooseClick(id), handleIsVisible()}} className={id === choosedId ? 'choosedPlant_card' : 'plant-cart '}>
        <div className="top"></div>
        <Image
            src={img}
            width={200}
            height={200}
            className="plant-small"
            alt={`plant-small`}
            />
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