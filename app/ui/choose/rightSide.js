import plantLarge from "@/public/choose/plant-large.png"
import arrowLeft from "@/public/choose/arrow-left.svg"
import Image from "next/image";
import Link from "next/link";
let scale = 50

export default function RightSide({choosedPlant, createPlant, typeId, handleIsVisible, isVisible}) {



    return (

            <main className={`main__choose ${isVisible ? 'main__choose--hidden' : ''}`}>

                 {
                    choosedPlant && <Image
                    src={choosedPlant.img_big}
                    width={choosedPlant.bigWidth - (choosedPlant.bigWidth * scale / 100)}
                    height={choosedPlant.bigHeight - (choosedPlant.bigHeight * scale / 100)}
                    className="plant-large"
                    alt={`plant`}
            />
                 }       
            
                <header className="main__header">
                    <button className="button-back" onClick={handleIsVisible}>
                    <Image
                    src={arrowLeft}
                    className="header_arrow-left"
                    alt={`arrow-left`}
                    />
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
                        <div>
                        {
                             
                            choosedPlant ?
                            <Link href='/' > 
                            <button onClick={() => createPlant( choosedPlant)} className="choosedB">
                            <p className="choosedP">Подтвердить выбор</p>
                            </button>
                            </Link>
                            
                            :
                            <button className="noChoosedB">
                            <p className="noChoosedP">Необходимо выбрать растение</p>
                            </button>
                        }
                       
                    </div>
                    {/* <Link href='/' > 
                            <button className="closeChooce">
                            <p className="CloseChooceP">Выйти</p>
                            </button>
                            </Link> */}
                    </div>
                </footer>
            </main>
    ) 
    }