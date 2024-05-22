
import Image from 'next/image';

import blockPlant from '@/public/almanach/block-plants.png';

export default function AlmanachDesc ({humDesc,
                                        tempDesc,
                                        illumDesc,
                                        airHumDesc,
}) {   

    return (
        <>
            <div className='right-parameter ' id='airHumDesc'>Влажность воздуха</div>
            <div className='right-desc'>{airHumDesc}</div>
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
            <div className='right-parameter' id='tempDesc'>Температура</div>
            <div className='right-desc'>{tempDesc}</div>
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
            <div className='right-parameter' id='humDesc'>Полив</div>
            <div className='right-desc'>{humDesc}</div>
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
            <div className='right-parameter' id='illumDesc'>Освещенность</div>
            <div className='right-desc'>{illumDesc}</div>
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
        </>
    )
}