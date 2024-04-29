import plantLarge from "@/public/choose/plant-large.png"
import arrowLeft from "@/public/choose/arrow-left.svg"
import Image from "next/image";
import Link from "next/link";
import { usePlantsStore } from "@/app/store/zustand";


export default function RightSide({choosedPlant, choosedId, plantId}) {

    const {  changeTypePlant } = usePlantsStore();


    return (

            <main className="main_choose">
                        
            <Image
                    src={plantLarge}
                    className="plant-large"
                    alt={`plant`}
            />
                <header className="main__header">
                    <button className="button-back">
                    <Image
                    src={arrowLeft}
                    className="header_arrow-left"
                    alt={`arrow-left`}
                    />
                        <img className="header_arrow-left" src="./media/arrow-left.svg" alt="arrow" />
                    </button>
                    <div className="top-green-block"></div>
                    <dl>
                        <dt className="main__header--hide">Size</dt>
                        <dd className="main__header--hide">Small</dd>
                        <dt>Humidity</dt>
                        <dd>64%</dd>
                        <dt>Light</dt>
                        <dd>Diffuse</dd>
                        <dt>Temeprature</dt>
                        <dd>18-24 C</dd>
                    </dl>
                </header>
                <footer className="main__footer">
                    <div className="bottom-white-block">
                        
                           {
                            choosedPlant ?
                            <dl> 
                                <dt>{choosedPlant.type}</dt>
                                <dd>{choosedPlant.title}</dd>
                            </dl>
                            :
                            <dl> 
                                <dt>Выберите растение</dt>
                                <dd>Описание растения...</dd>
                            </dl>
                           }
                        
                        <div className="icons">
                           {/* <a href="#">
                               <img src="./media/plus-box.svg" alt="plus" className="plus-box"/>
                           </a>
                           <a href="#">
                               <img src="./media/close.svg" alt="" className="close"/>
                           </a>
                           <a href="#">
                               <img src="./media/help.svg" alt="" className="help"/>
                           </a> */}
                        </div>
                        <div className="hide-icons">
                            {/* <img src="./media/fire.svg" alt="fire" className="fire"/>
                            <img src="./media/sunrise.svg" alt="sunrise" className="sunrise"/>
                            <img src="./media/drops.svg" alt="drops" className="drops"/> */}
                        </div>
                        {
                             
                            choosedPlant ?
                            <Link href={`/${plantId}/plant`} > 
                            <button onClick={() => changeTypePlant( choosedId, plantId)} className="choosedB">
                            <p className="choosedP">Подтвердить выбор</p>
                            </button>
                            </Link>
                            
                            :
                            <button className="noChoosedB">
                            <p className="noChoosedP">Необходимо выбрать растение</p>
                            </button>
                        }
                        
                    </div>
                </footer>
            </main>
    ) 
    }