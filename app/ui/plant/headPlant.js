import Image from 'next/image';

import arrowLeftCircle from '@/public/plant/arrow-left-circle.svg';

import Link from 'next/link';
import { usePlantsStore } from '@/app/store/zustand';
import { useEffect, useState } from 'react';
export default function HeadPlant({plant, id}) {
    const {data} = usePlantsStore()
    const [filterData, setFilterData] = useState()
    useEffect(() => {
        setFilterData(data.filter(e => e.plantId == id)[0])
    }, [])
    return (

       <div className="header_plant">
                    {
                        filterData && <div className="header_plant__container">
                        <div className="header_plant__left">
                            <div className="header_plant__title">
                                <span className="header_plant__title_span">{plant.name}</span>
                            </div>
                            <div className="header_plant__parameters">
                                <div className="parameter">
                                    <span className="parameter__title">Температура воздуха</span>
                                    <span className="parameter__parameter">{filterData.temperature} C</span>
                                </div>
                                <div className="parameter">
                                    <span className="parameter__title">Влажность воздуха</span>
                                    <span className="parameter__parameter">{filterData.airHum}%</span>
                                </div>
                                <div className="parameter">
                                    <span className="parameter__title">Влажность почвы</span>
                                    <span className="parameter__parameter">{filterData.humidity}%</span>
                                </div>
                                <div className="parameter">
                                    <span className="parameter__title">Освещение</span>
                                    <span className="parameter__parameter">{filterData.illumination}Lux</span>
                                </div>
                            </div>
                        </div>
                        <Link href={'/'} className='link_back_plant'>
                        <div className="header_plant__right">
                            <Image className="header_plant__arrow_block"
                                   src={arrowLeftCircle}
                                   alt='Назад'></Image>
                        </div>
                        </Link>
                    </div>
                    }
                </div>
    ) 
    }