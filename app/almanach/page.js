'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import plantAlmanach from '@/public/almanach/plant-almanach.png';
import grid from '@/public/almanach/grid.svg';
import humidity from '@/public/almanach/humidity.svg';
import temperature from '@/public/almanach/temperature.svg';
import sunshine from '@/public/almanach/sunshine.svg';
import water from '@/public/almanach/water.svg';

import AlmanachChoose from '../ui/almanach/almanachChoose';
import './page.scss';
import RealHeader from '../ui/realHeader';
import AlmanachDesc from '../ui/almanach/almanachDesc';
import { usePlantsStore } from '../store/zustand';

export default function Almanach () {

    const [showAlmanachChoose, setShowAlmanachChoose] = useState(false);
    const [selectedPlantId, setSelectedPlantId] = useState(1);


    const handleAlmanachChoose = (id) => {
        setSelectedPlantId(id);
        setShowAlmanachChoose(!showAlmanachChoose);
    };

    /*Отображение панели выбора^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    const { typePlants } = usePlantsStore();
    const currentPlant = typePlants.find(e => e.id == selectedPlantId);


    return (
        <>
            {showAlmanachChoose && <AlmanachChoose handleAlmanachChoose={handleAlmanachChoose} />}
            <RealHeader />
            <div className={showAlmanachChoose ? 'wrapper--blured' : 'wrapper'}
                 onClick={() => {
                    showAlmanachChoose ? handleAlmanachChoose(selectedPlantId) : null;}}>
                <div className='sides-container'>
                    <aside className='left'>
                        <div className='left-block'></div>
                        <Image className='left-plant' src={plantAlmanach} alt=''></Image>
                        <div className='left-grid' onClick={() => handleAlmanachChoose(selectedPlantId)}>
                            <Image src={grid} alt=''></Image>
                        </div>
                        <div className='left-parameters'>
                            <a href='#airHumDesc'>
                                <div className='left-humidity'>
                                    <Image src={humidity} alt=''></Image>
                                </div>
                            </a>
                            <a  href='#tempDesc'>
                                <div className='left-temperature'>
                                    <Image src={temperature} alt=''></Image>
                                </div>
                            </a>
                            <a href='#humDesc'>
                                <div className='left-water'>
                                    <Image src={water} alt=''></Image>
                                </div>
                            </a>
                            <a href='#illumDesc'>
                                <div className='left-sunshine'>
                                    <Image src={sunshine} alt=''></Image>
                                </div>
                            </a>
                        </div>
                    </aside>
                    <aside className='right'>
                        <div className='right-name'>{currentPlant.type}</div>
                        {<AlmanachDesc humDesc={currentPlant.recomendation.humidity.desc}
                                        tempDesc={currentPlant.recomendation.temperature.desc}
                                        illumDesc={currentPlant.recomendation.illumination.desc}
                                        airHumDesc={currentPlant.recomendation.airHum.desc}/>}
                    </aside>
                </div>
            </div>
        </>
    );
}
