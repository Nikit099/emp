'use client'
import Image from "next/image";
import plant from '@/public/plant/plant.png';
import questionCircle from '@/public/plant/question-circle.svg'
import rotate from '@/public/plant/rotate.svg';
import pen from '@/public/plant/pen.svg';
import LineNorms from "./lineNorms";
import { usePlantsStore } from "@/app/store/zustand";
import { usePathname } from 'next/navigation';

export default function SetNorms() {
    const castomNorms = usePlantsStore((state) => state.castomNorms);
    const pathname = usePathname()
    console.log(pathname);
    return (

        <div className="norms_plant">
        <div className="norms_plant__container">
            <div className="norms_plant__left">
                <div className="norms_plant__title_block">
                    <span className="norms_plant__title">Нормы</span>
                    <Image className="norms_plant__title_img"
                           src={questionCircle}
                           alt='Дополнительная информация'></Image>
                </div>
                <div className="norms_plant__main_block">
                    {/* {
                        castomNorms.map(i => {
                            i.filter(elem => elem.plantId === )
                        } )
                    } */}
                    <LineNorms />


                    <div className="line">
                        <div className="line__title">Влажность воздуха</div>
                        <div className="line__parameter">10 - 30 %</div>
                        <div className="line__reset">
                            <Image className="line__reset_img"
                                   src={rotate}
                                   alt='Отменить'></Image>
                        </div>
                        <div className="line__input_block">
                            <form className="line__form">
                                <Image className="line__pen"
                                       src={pen}
                                       alt='Редактировать'></Image>
                                <input className="line__input"
                                    placeholder="Введите значение от - до"></input>
                            </form>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line__title">Влажность почвы</div>
                        <div className="line__parameter">10 - 30 %</div>
                        <div className="line__reset">
                            <Image className="line__reset_img"
                                    src={rotate}
                                    alt='Отменить'></Image>
                        </div>
                        <div className="line__input_block">
                            <form className="line__form">
                                <Image className="line__pen"
                                       src={pen}
                                       alt='Редактировать'></Image>
                                <input className="line__input"
                                    placeholder="Введите значение от - до"></input>
                            </form>
                        </div>
                    </div>
                    <div className="line">
                        <div className="line__title line__title_lighting">Освещение</div>
                        <div className="line__parameter">10 - 30 Lux</div>
                        <div className="line__reset">
                            <Image className="line__reset_img"
                                   src={rotate}
                                   alt='Отменить'></Image>
                        </div>
                        <div className="line__input_block">
                            <form className="line__form">
                                <Image className="line__pen"
                                       src={pen}
                                       alt='Редактировать'></Image>
                                <input className="line__input"
                                    placeholder="Введите значение от - до"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="norms_plant__right">
                <Image className="norms_plant__plant"
                       src={plant}
                       alt='Растение'></Image>
            </div>
        </div>
    </div>

    ) 
    }