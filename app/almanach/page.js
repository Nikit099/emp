'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import blockPlant from '@/public/almanach/block-plants.png';
import plantAlmanach from '@/public/almanach/plant-almanach.png';
import grid from '@/public/almanach/grid.svg';
import humidity from '@/public/almanach/humidity.svg';
import temperature from '@/public/almanach/temperature.svg';
import sunshine from '@/public/almanach/sunshine.svg';
import water from '@/public/almanach/water.svg';

import AlmanachChoose from '../ui/almanach/almanachChoose';
import './page.scss';
import RealHeader from '../ui/main/realHeader';

export default function Almanach () {
    const [showAlmanachChoose, setShowAlmanachChoose] = useState(false);

    const handleAlmanachChoose = () => {
        setShowAlmanachChoose(!showAlmanachChoose);
    };

    return (
        <>
            {showAlmanachChoose && <AlmanachChoose />}
            <RealHeader />
            <div className={showAlmanachChoose ? 'wrapper--blured' : 'wrapper'}>
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
                        <div className='right-parameter'>Температура</div>
                        <div className='right-desc'>Название топика будут слать, думаю можно сделать в твоей же интеграции, может даже доработки не будет, если у нас не записаны в коде какие топики могут слать в целом да, можно в той же спеке описать, только в комментах оставить пометку, что запись/чтение из топиков "новые_топики" в рамках </div>
                        <div className='right-block'>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                        </div>
                        <div className='right-name'>Драцена</div>
                        <div className='right-parameter'>Температура</div>
                        <div className='right-desc'>Название топика будут слать, думаю можно сделать в твоей же интеграции, может даже доработки не будет, если у нас не записаны в коде какие топики могут слать в целом да, можно в той же спеке описать, только в комментах оставить пометку, что запись/чтение из топиков "новые_топики" в рамках </div>
                        <div className='right-block'>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                        </div>
                        <div className='right-name'>Драцена</div>
                        <div className='right-parameter'>Температура</div>
                        <div className='right-desc'>Название топика будут слать, думаю можно сделать в твоей же интеграции, может даже доработки не будет, если у нас не записаны в коде какие топики могут слать в целом да, можно в той же спеке описать, только в комментах оставить пометку, что запись/чтение из топиков "новые_топики" в рамках </div>
                        <div className='right-block'>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                        </div>
                        <div className='right-name'>Драцена</div>
                        <div className='right-parameter'>Температура</div>
                        <div className='right-desc'>Название топика будут слать, думаю можно сделать в твоей же интеграции, может даже доработки не будет, если у нас не записаны в коде какие топики могут слать в целом да, можно в той же спеке описать, только в комментах оставить пометку, что запись/чтение из топиков "новые_топики" в рамках </div>
                        <div className='right-block'>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                            <div className='right-block-img'>
                                <Image src={blockPlant}></Image>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
