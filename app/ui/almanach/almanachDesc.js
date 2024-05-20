
import Image from 'next/image';

import blockPlant from '@/public/almanach/block-plants.png';

export default function AlmanachDesc ({}) {   

    return (
        <>
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
        </>
    )
}