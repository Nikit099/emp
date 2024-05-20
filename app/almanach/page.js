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
import RealHeader from '../ui/main/realHeader';
import AlmanachDesc from '../ui/almanach/almanachDesc';

export default function Almanach () {
    const [showAlmanachChoose, setShowAlmanachChoose] = useState(false);

    const handleAlmanachChoose = () => {
        setShowAlmanachChoose(!showAlmanachChoose);
    };

    return (
        <>
            {showAlmanachChoose && <AlmanachChoose handleAlmanachChoose={handleAlmanachChoose} />}
            <RealHeader />
            <div className={showAlmanachChoose ? 'wrapper--blured' : 'wrapper'}
                 onClick={() => {
                    showAlmanachChoose ? handleAlmanachChoose() : null;}}>
                <div className='sides-container'>
                    <aside className='left'>
                        <div className='left-block'></div>
                        <Image className='left-plant' src={plantAlmanach}></Image>
                        <div className='left-grid' onClick={handleAlmanachChoose}>
                            <Image src={grid}></Image>
                        </div>
                        <div className='left-parameters'>
                            <div className='left-humidity'>
                                <Image src={humidity}></Image>
                            </div>
                            <div className='left-temperature'>
                                <Image src={temperature}></Image>
                            </div>
                            <div className='left-water'>
                                <Image src={water}></Image>
                            </div>
                            <div className='left-sunshine'>
                                <Image src={sunshine}></Image>
                            </div>
                        </div>
                    </aside>
                    <aside className='right'>
                        <div className='right-name'>Драцена</div>
                        {<AlmanachDesc/>}
                    </aside>
                </div>
            </div>
        </>
    );
}
