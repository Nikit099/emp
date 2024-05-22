
import Image from 'next/image';

import React, {  } from 'react';

import plant from '../../../public/almanach/plant.png';

export default function AlmanachPlant ({id,
                                        name,
                                        desc,
                                        handleAlmanachChoose,}) {   

    return (
        <>

            <div className='plants__plant'>
                <div className='plants__block'
                     onClick={() => handleAlmanachChoose(id)}>
                    <div className='plants__top'></div>
                    <Image className='plants__img'
                            src={plant}></Image>
                    <div className='plants__title'>{name}</div>
                    <div className='plants__desc'>{desc}</div>
                </div>
            </div>
        
        </>
    )
}